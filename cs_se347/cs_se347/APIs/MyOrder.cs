using cs_se347.Model;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Net.Mime;
using static cs_se347.APIs.MyCart;

namespace cs_se347.APIs
{
    public class MyOrder
    {
        public MyOrder() { }
        public async Task<bool> addOrder(List<long> list_cart_item_id, long address_id, List<long> vouchers_id)
        {
            SqlOrder newOrder = new SqlOrder();
            using (DataContext context = new DataContext())
            {
                List<SqlCartItem> list_cart_item = context.cart_items.Include(s => s.product).Where(s => list_cart_item_id.Contains(s.ID)).Include(s => s.cart).ThenInclude(s => s.shop).ToList();
                if (!list_cart_item.Any())
                {
                    return false;
                }
                List<SqlCartItem> tmp = list_cart_item;
                SqlAddress? address = context.addresses.Where(s => s.ID == address_id).Include(s => s.user).FirstOrDefault();
                if (address == null)
                {
                    return false;
                }

                SqlUser user = address.user;


                while (tmp.Where(s => s.status == Status_Cart_item.active).Count() > 0)
                {
                    // SqlShop shop = list_cart_item[0].cart.shop;
                    SqlShop shop = context.shops.Where(s => s.ID == tmp[0].cart.shop.ID).FirstOrDefault();
                    //newOrder.ID = DataContext.GenerateId();
                    newOrder.user = user;
                    newOrder.shop = shop;
                    newOrder.address = JsonConvert.SerializeObject(address, Formatting.Indented,
                                                                                new JsonSerializerSettings()
                                                                                {
                                                                                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                                                                                });
                    List<string> seri_cart_items = new List<string>();
                    for (int i = 0; i < tmp.Count; i++)
                    {
                        if (tmp[i].cart.shop.ID == shop.ID)
                        {
                            list_cart_item[i].status = Status_Cart_item.order;
                            list_cart_item[i].order = newOrder;
                            string data = JsonConvert.SerializeObject(list_cart_item[i], Formatting.Indented,
                                                                                new JsonSerializerSettings()
                                                                                {
                                                                                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                                                                                });
                            seri_cart_items.Add(data);
                            //context.cart_items.Update(list_cart_item[i]);
                            //tmp.Remove(tmp[i]);
                        }
                    }
                    newOrder.list_cart_item = seri_cart_items;
                    context.orders.Add(newOrder);

                }
                int rows = await context.SaveChangesAsync();
                return true;
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

            public long product_id { get; set; }
            public string productName { get; set; }
            //public long productPrice { get; set; }
            //public int discount { get; set; }
            public long productSalePrice { get; set; }
            public string productImage { get; set; }
            public string? option { get; set; }
            public int quantity { get; set; }
            public long cart_item_id { get; set; }
        }
        public class Orders_DTO
        {
            public long order_id { get; set; }
            public string shopName { get; set; } = "";
            public long shop_id { get; set; }
            public List<OrderItem_DTO> list_orderItem { get; set; } = new List<OrderItem_DTO>();
            public string order_status { get; set; }
            //public List voucher 
        }
        public string order_get_status(int enum1)
        {
            switch (enum1)
            {
                case 0:
                    return "cho_thanh_toan";
                case 1:
                    return "dang_xu_ly";
                case 2:
                    return "dang_van_chuyen";
                case 3:
                    return "da_giao";
                case 4:
                    return "da_huy";
            }
            return "";
        }
        public List<Orders_DTO> getOrdersByUserId(long userId, int status, int page, int page_size)
        {
            List<Orders_DTO> response = new List<Orders_DTO>();

            using (DataContext context = new DataContext())
            {
                SqlUser? user = context.users.Where(s => s.ID == userId).FirstOrDefault();
                if (user == null)
                {
                    return response;
                }
                List<SqlOrder>? orders = context.orders.Where(s => s.user == user && ((int)s.status) == status).Take(page * page_size).Include(s => s.shop).ToList();
                foreach (SqlOrder order in orders)
                {
                    Orders_DTO my_order = new Orders_DTO();
                    List<SqlCartItem> cart_items = new List<SqlCartItem>();
                    foreach (string cart_item in order.list_cart_item)
                    {
                        //string data = JsonConvert.SerializeObject(cart_item, Formatting.Indented,
                        //                                                       new JsonSerializerSettings()
                        //                                                       {
                        //                                                           ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                        //                                                       });
                        SqlCartItem tmp = JsonConvert.DeserializeObject<SqlCartItem>(cart_item);
                        cart_items.Add(tmp);
                    }

                    List<OrderItem_DTO> order_items = new List<OrderItem_DTO>();
                    foreach (SqlCartItem item in cart_items)
                    {
                        OrderItem_DTO tmp = new OrderItem_DTO();
                        tmp.product_id = item.product.ID;
                        tmp.productName = item.product.productName;
                        //chưa áp voucher
                        tmp.productSalePrice = item.product.productSalePrice;
                        tmp.productImage = item.product.productImage;
                        tmp.option = item.option;
                        tmp.quantity = item.quantity;
                        tmp.cart_item_id = item.ID;
                        order_items.Add(tmp);
                    }
                    my_order.list_orderItem = order_items;
                    my_order.order_status = order.status.ToString();
                    my_order.order_id = order.ID;
                    my_order.shopName = order.shop.name;
                    my_order.shop_id = order.shop.ID;
                    //my_order.shop = order.list_cart_item[0].product.shop.name;
                    response.Insert(0, my_order);
                }
            }

            return response;
        }
        public Status_Order convert_order_status(string order_status)
        {
            switch (order_status)
            {
                case "cho_thanh_toan":
                    return Status_Order.cho_thanh_toan;
                case "dang_xu_ly":
                    return Status_Order.dang_xu_ly;
                case "dang_van_chuyen":
                    return Status_Order.dang_van_chuyen;
                case "da_giao":
                    return Status_Order.da_giao;
                case "da_huy":
                    return Status_Order.da_huy;
            }
            return Status_Order.da_huy;
        }
        public List<string> getlist_order_status()
        {
            List<string> response = new List<string>();
            response.Add("cho_thanh_toan");
            response.Add("dang_xu_ly");
            response.Add("dang_van_chuyen");
            response.Add("da_giao");
            response.Add("da_huy");
            return response;
        }
        public async Task<bool> update_Order_status(long order_id, string order_status)
        {
            Status_Order status = convert_order_status(order_status);
            using (DataContext context = new DataContext())
            {
                SqlOrder order = context.orders.Where(s => s.ID == order_id).FirstOrDefault();
                if (order == null)
                {
                    return false;
                }
                order.status = status;
                await context.SaveChangesAsync();
                return true;
            }
        }
        public async Task<bool> reOrder(long order_id)
        {
            return true;
        }
        public async Task<bool> cancle_order(long order_id)
        {
            using (DataContext context = new DataContext())
            {
                SqlOrder order = context.orders.Where(s => s.ID == order_id).FirstOrDefault();

                if (order == null)
                {
                    return false;
                }
                if (order.time < DateTime.UtcNow.AddDays(-2))
                {
                    return false;
                }
                order.status = Status_Order.da_huy;

                await context.SaveChangesAsync();
                return true;
            }
        }


    }
}
