using cs_se347.Model;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Mime;
using static cs_se347.APIs.MyCart;
using static cs_se347.Controllers.OrderController;

namespace cs_se347.APIs
{
    public class MyOrder
    {
        public MyOrder() { }
        public async Task<long> addOrder(List<long> list_cart_item_id, long address_id)
        {
            long response = -1;
            SqlOrder newOrder = new SqlOrder();


            using (DataContext context = new DataContext())
            {
                List<SqlCartItem> list_cart_item = context.cart_items.Include(s => s.product).Where(s => list_cart_item_id.Contains(s.ID)).Include(s => s.cart).ThenInclude(s => s.shop).ToList();
                if (!list_cart_item.Any())
                {
                    return response;
                }
                SqlAddress? address = context.addresses.Where(s => s.ID == address_id).Include(s => s.user).AsNoTracking().FirstOrDefault();
                if (address == null)
                {
                    return response;
                }
                SqlUser? user = context.users.Where(s => s.ID == address.user.ID).FirstOrDefault();

                newOrder.user = user;
                newOrder.address = JsonConvert.SerializeObject(address);
                newOrder.ID = DataContext.GenerateRandomValue_Order_id();
                response = newOrder.ID;
                List<SqlOrderItem> items = new List<SqlOrderItem>();
                List<SqlCart> carts = new List<SqlCart>();
                foreach (SqlCartItem item in list_cart_item)
                {
                    if (!carts.Contains(item.cart))
                    {
                        carts.Add(item.cart);
                    }
                }

                foreach (SqlCart cart in carts)
                {
                    List<SqlCartItem> cart_items = list_cart_item.Where(s => s.cart == cart).ToList();
                    SqlOrderItem order_item = new SqlOrderItem();
                    order_item.order = newOrder;
                    order_item.shop = cart.shop;
                    order_item.ID = DataContext.GenerateRandomValue_Order_id();
                    List<string> _list_cart_item = new List<string>();
                    foreach (SqlCartItem cart_item in cart_items)
                    {
                        string data = JsonConvert.SerializeObject(cart_item, Formatting.Indented,
                                                               new JsonSerializerSettings()
                                                               {
                                                                   ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                                                               });
                        _list_cart_item.Add(data);
                        cart_item.status = Status_Cart_item.order;
                    }
                    order_item.list_cart_item = _list_cart_item;
                    context.orders_items.Add(order_item);
                    newOrder.items.Add(order_item);
                }
                context.orders.Add(newOrder);
                if (user.orders.Any())
                {
                    user.orders.Add(newOrder);
                }
                else
                {
                    List<SqlOrder> orders = new List<SqlOrder>();
                    orders.Add(newOrder);
                    user.orders = orders;
                }
                int rows = await context.SaveChangesAsync();
                return response;
            }
        }

        //public async Task<bool> addManyOrder(long cartId)
        //{
        //    using (DataContext context = new DataContext())
        //    {
        //        SqlCart cart = context.carts.Include(s => s.user).Where(s => s.ID == cartId).FirstOrDefault();
        //        if (cart == null)
        //        {
        //            return false;
        //        }
        //        SqlOrder order = new SqlOrder();
        //        order.cartID = cartId;
        //        order.user = cart.user;
        //        cart.status = Status_Cart.order;
        //        context.Add(order);
        //        await context.SaveChangesAsync();
        //        return true;
        //    }
        //}
        public class OrderItem_DTO
        {
            public string productName { get; set; }
            public string productImage { get; set; }
            public string shop_name { get; set; }
            public long amount { get;set; }
            public string? option { get; set; }
            public int quantity { get; set; }
        }
        public class Orders_DTO
        {
            public long order_id { get; set; }
            public List<OrderItem_DTO> items { get; set; } = new List<OrderItem_DTO>();
            public int order_status { get; set; }
            public long total { get; set; }
        }

        
        //public string order_get_status(int enum1)
        //{
        //    switch (enum1)
        //    {
        //        case 0:
        //            return "cho_thanh_toan";
        //        case 1:
        //            return "dang_xu_ly";
        //        case 2:
        //            return "dang_van_chuyen";
        //        case 3:
        //            return "da_giao";
        //        case 4:
        //            return "da_huy";
        //    }
        //    return "";
        //}
        public List<Orders_DTO> getOrdersByUserId(long userId, int status)
        {
            List<Orders_DTO> response = new List<Orders_DTO>();
            using (DataContext context = new DataContext())
            {
                SqlUser? user = context.users!.Where(s=>s.ID == userId).Include(s=>s.orders).ThenInclude(s=>s.items!).ThenInclude(s => s.shop).AsNoTracking().FirstOrDefault();
                if(user == null) { return response; }
                List<SqlOrder> orders = user!.orders.Where(s => s.status == status).ToList();
                if (status == -1)
                {
                    orders = user!.orders;
                }
                foreach( SqlOrder order in orders)
                {
                    long total = 0;
                    Orders_DTO _order = new Orders_DTO();
                    List<OrderItem_DTO> items = new List<OrderItem_DTO>();
                    foreach ( SqlOrderItem item in order.items!)
                    {
                        foreach(string _cartItem in item.list_cart_item!)
                        {
                            SqlCartItem cart_item = JsonConvert.DeserializeObject<SqlCartItem>(_cartItem);
                            OrderItem_DTO tmp = new OrderItem_DTO();
                            tmp.option = cart_item.option;
                            tmp.quantity= cart_item.quantity;
                            tmp.amount = cart_item.quantity * cart_item.product.productSalePrice;
                            tmp.productName= cart_item.product.productName;
                            tmp.productImage= cart_item.product.productImage;
                            tmp.shop_name = item.shop!.name;
                            items.Add(tmp);
                            total += cart_item.quantity * cart_item.product.productSalePrice;
                        }
                    }
                    _order.order_id = order.ID;
                    _order.items = items;
                    _order.order_status = order.status;
                    _order.total = total;
                    response.Add(_order);
                }
            }
            return response;
        }
        public class Detail_Order
        {
            public long order_id { get; set; }
            public Address_Short? address { get; set; }
            public List<Detail_Item_Order>? items { get; set; }
            public string hinh_thuc_giao_hang { get; set; } = "Giao vào " + (DateTime.Today.AddDays(2)).ToString("dd/MM");
            public string hinh_thuc_thanh_toan { get; set; } = "Thanh toán tiền mặt khi nhận hàng";
        }
        public class Detail_Item_Order
        {
            public long productPrice { get; set; }
            public long productSalePrice { get; set; }
            //
            public string? productName { get; set; }
            public string? productImage { get; set; }
            public string? shop_name { get; set; }
            public long amount { get; set; }
            public string? option { get; set; }
            public int quantity { get; set; }
        }
        public Detail_Order get_detail_order (long order_id)
        {
            Detail_Order response = new Detail_Order();
            List<Detail_Item_Order>? items= new List<Detail_Item_Order> ();
            using (DataContext context= new DataContext())
            {
                SqlOrder? order = context.orders!.Where(s=>s.ID == order_id).Include(s=>s.items)!.ThenInclude(s=>s.shop).AsNoTracking().FirstOrDefault();
                response.order_id = order!.ID;
                response.address = Program.api_address.transfer(JsonConvert.DeserializeObject<SqlAddress>(order.address));

                foreach (SqlOrderItem item in order!.items!)
                {
                    foreach(string _item in item.list_cart_item!)
                    {
                        SqlCartItem cartItem = JsonConvert.DeserializeObject<SqlCartItem>(_item);
                        Detail_Item_Order detail_Item_Order = new Detail_Item_Order();
                        detail_Item_Order.productName = cartItem.product.productName;
                        detail_Item_Order.productImage = cartItem.product.productImage;
                        detail_Item_Order.productPrice = cartItem.product.productSalePrice;
                        detail_Item_Order.quantity = cartItem.quantity;
                        detail_Item_Order.option= cartItem.option;
                        detail_Item_Order.productSalePrice= cartItem.product.productSalePrice;
                        detail_Item_Order.shop_name = cartItem.product.shop.name;
                        detail_Item_Order.amount = detail_Item_Order.quantity * cartItem.product.productSalePrice;
                        items.Add(detail_Item_Order);
                    }
                }
                response.items= items;
            }
            return response;
        }
        //public List<Orders_DTO> getOrdersByUserId(long userId, int status, int page, int page_size)
        //{
        //    List<Orders_DTO> response = new List<Orders_DTO>();

        //    using (DataContext context = new DataContext())
        //    {
        //        SqlUser? user = context.users.Where(s => s.ID == userId).FirstOrDefault();
        //        if (user == null)
        //        {
        //            return response;
        //        }
        //        List<SqlOrder>? orders;
        //        if (status == -1)
        //        {
        //            orders = context.orders.Where(s => s.user == user).Take(page * page_size).Include(s => s.shop).ToList();
        //        }
        //        else
        //        {
        //            orders = context.orders.Where(s => s.user == user && ((int)s.status) == status).Take(page * page_size).Include(s => s.shop).ToList();
        //        }
        //        foreach (SqlOrder order in orders)
        //        {
        //            Orders_DTO my_order = new Orders_DTO();
        //            List<SqlCartItem> cart_items = new List<SqlCartItem>();
        //            foreach (string cart_item in order.list_cart_item)
        //            {
        //                //string data = JsonConvert.SerializeObject(cart_item, Formatting.Indented,
        //                //                                                       new JsonSerializerSettings()
        //                //                                                       {
        //                //                                                           ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
        //                //                                                       });
        //                SqlCartItem tmp = JsonConvert.DeserializeObject<SqlCartItem>(cart_item);
        //                cart_items.Add(tmp);
        //            }

        //            List<OrderItem_DTO> order_items = new List<OrderItem_DTO>();
        //            foreach (SqlCartItem item in cart_items)
        //            {
        //                OrderItem_DTO tmp = new OrderItem_DTO();
        //                tmp.product_id = item.product.ID;
        //                tmp.productName = item.product.productName;
        //                //chưa áp voucher
        //                tmp.productSalePrice = item.product.productSalePrice;
        //                tmp.productImage = item.product.productImage;
        //                tmp.option = item.option;
        //                tmp.quantity = item.quantity;
        //                tmp.cart_item_id = item.ID;
        //                order_items.Add(tmp);
        //            }
        //            my_order.list_orderItem = order_items;
        //            my_order.order_status = order.status.ToString();
        //            my_order.order_id = order.ID;
        //            my_order.shopName = order.shop.name;
        //            my_order.shop_id = order.shop.ID;
        //            //my_order.shop = order.list_cart_item[0].product.shop.name;
        //            response.Insert(0, my_order);
        //        }
        //    }

        //    return response;
        //}
        ////public Status_Order convert_order_status(string order_status)
        ////{
        ////    switch (order_status)
        ////    {
        ////        case "cho_thanh_toan":
        ////            return Status_Order.cho_thanh_toan;
        ////        case "dang_xu_ly":
        ////            return Status_Order.dang_xu_ly;
        ////        case "dang_van_chuyen":
        ////            return Status_Order.dang_van_chuyen;
        ////        case "da_giao":
        ////            return Status_Order.da_giao;
        ////        case "da_huy":
        ////            return Status_Order.da_huy;
        ////    }
        ////    return Status_Order.da_huy;
        ////}
        ////public List<string> getlist_order_status()
        ////{
        ////    List<string> response = new List<string>();
        ////    response.Add("cho_thanh_toan");
        ////    response.Add("dang_xu_ly");
        ////    response.Add("dang_van_chuyen");
        ////    response.Add("da_giao");
        ////    response.Add("da_huy");
        ////    return response;
        ////}
        //public async Task<bool> update_Order_status(long order_id, string order_status)
        //{
        //    //Status_Order status = convert_order_status(order_status);
        //    //using (DataContext context = new DataContext())
        //    //{
        //    //    SqlOrder order = context.orders.Where(s => s.ID == order_id).FirstOrDefault();
        //    //    if (order == null)
        //    //    {
        //    //        return false;
        //    //    }
        //    //    order.status = status;
        //    //    await context.SaveChangesAsync();
        //        return true;
        //    //}
        //}
        //public async Task<bool> reOrder(long order_id)
        //{
        //    return true;
        //}
        //public async Task<bool> cancle_order(long order_id)
        //{
        //    using (DataContext context = new DataContext())
        //    {
        //        SqlOrder order = context.orders.Where(s => s.ID == order_id).FirstOrDefault();

        //        if (order == null)
        //        {
        //            return false;
        //        }
        //        if (order.time < DateTime.UtcNow.AddDays(-2))
        //        {
        //            return false;
        //        }
        //        order.status = Status_Order.da_huy;

        //        await context.SaveChangesAsync();
        //        return true;
        //    }
        //}


    }
}

