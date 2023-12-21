using cs_se347.Model;
using Microsoft.EntityFrameworkCore;
using System.Net.Mime;
using static cs_se347.APIs.MyCart;

namespace cs_se347.APIs
{
    public class MyOrder
    {
        public MyOrder() { }
        public async Task<bool> addOrder(List<long> list_cart_item_id, long address_id)
        {
            SqlOrder order = new SqlOrder();

            using (DataContext context = new DataContext())
            {
                SqlCart cart = context.carts.Include(s => s.user).Where(s => s.ID == cartId).FirstOrDefault();
                if (cart == null)
                {
                    return false;
                }
                order.cartID = cartId;
                order.user = cart.user;
                cart.status = Status_Cart.order;
                context.Add(order);
                await context.SaveChangesAsync();
                return true;
            }
        
        
        
        
        
        
        
        
        
        }

        public List<Res_My_Order> getOrdersByUserId(long userId)
        {
            List<Res_My_Order> response = new List<Res_My_Order>();
            using (DataContext context = new DataContext())
            {
                SqlUser user = context.users.Where(s => s.ID == userId).FirstOrDefault();
                if (user == null)
                {
                    return response;
                }
                List<SqlOrder> orders = context.orders.Where(s => s.user == user).ToList();
                foreach (SqlOrder order in orders)
                {
                    Res_My_Order my_order = new Res_My_Order();
                    SqlCart cart = context.carts.Include(s=>s.product).ThenInclude(s=>s.shop).Where(s=>s.ID== order.cartID).FirstOrDefault();
                    my_order.Id = order.ID;
                    my_order.quantity = cart.quantity;
                    my_order.total = cart.quantity * cart.product.productSalePrice;
                    my_order.shopName = cart.product.shop.name;
                    switch (order.status)
                    {
                        case Status_Order.cho_thanh_toan:
                            my_order.status = "cho_thanh_toan";
                            break;
                        case Status_Order.dang_xu_ly:
                            my_order.status = "dang_xu_ly";
                            break;
                        case Status_Order.dang_van_chuyen:
                            my_order.status = "dang_van_chuyen";
                            break;
                        case Status_Order.da_giao:
                            my_order.status = "da_giao";
                            break;
                        case Status_Order.da_huy:
                            my_order.status = "da_huy";
                            break;
                    }
                    response.Add(my_order);
                }
            }
            response = response.OrderByDescending(s => s.Id).ToList();
            return response;
        }


    }
}
