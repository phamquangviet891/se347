using cs_se347.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace cs_se347.APIs
{
    public class MyCart
    {
        public MyCart() { }
        public class Res_getList
        {
            public Shop shop { get; set; }
            public List<Res_CartItem_DTO> list_cartItem { get; set; } = new List<Res_CartItem_DTO>();
        }
        public async Task<bool> addToCart(long userId, long productId, string option)
        {
            using (DataContext context = new DataContext())
            {
                SqlUser user = context.users.Where(s => s.ID == userId).FirstOrDefault();
                if (user == null)
                {
                    return false;
                }
                SqlProduct product = context.products.Where(s => s.ID == productId).FirstOrDefault();
                if (product == null)
                {
                    return false;
                }
                if (product.options.Count >= 1 && !product.options.Contains(option))
                {
                    return false;
                }

                SqlCart existing = context.carts.Include(s => s.user).Include(s => s.product).Where(s => s.product.ID == productId && s.user.ID == userId && s.option == option).FirstOrDefault();
                if (existing != null && existing.option.Contains(option))
                {
                    existing.quantity += 1;
                    await context.SaveChangesAsync();
                    return true;
                }
                else
                {
                    SqlCart newCart = new SqlCart();
                    if (product.options.Count >= 1)
                    {
                        newCart.option = option;
                    }
                    else
                    {
                        newCart.option = "";
                    }
                    newCart.product = product;
                    newCart.user = user;
                    newCart.quantity = 1;
                    newCart.status = Status_Cart.active;
                    context.carts.Add(newCart);
                    await context.SaveChangesAsync();
                    return true;
                }
            }
        }

        public List<Res_getList> getCartsByUserId(long userId)
        {
            List<Res_getList> response = new List<Res_getList>();
            using (DataContext context = new DataContext())
            {
                SqlUser user = context.users.Where(s => s.ID == userId).FirstOrDefault();
                if (user == null)
                {
                    return response;
                }

                List<SqlCart> carts = context.carts.Include(s => s.user).Include(s => s.product).ThenInclude(s => s.shop).Where(s => s.user == user && s.status == Status_Cart.active).ToList();
                List<SqlShop> shops = new List<SqlShop>();
                foreach (SqlCart cart in carts)
                {
                    if (!shops.Contains(cart.product.shop))
                    {
                        shops.Add(cart.product.shop);
                    }
                }
                for (int i = 0; i < shops.Count; i++)
                {
                    Res_getList item = new Res_getList();
                    Shop _shop = new Shop();
                    _shop.name = shops[i].name;
                    item.shop = _shop;
                    List<Res_CartItem_DTO> list = new List<Res_CartItem_DTO>();
                    foreach (SqlCart cart in carts)
                    {
                        Res_CartItem_DTO tmp = new Res_CartItem_DTO();
                        if (cart.product.shop == shops[i])
                        {
                            tmp.cartId = cart.ID;
                            tmp.productId = cart.product.ID;
                            tmp.productName = cart.product.productName;
                            tmp.productSalePrice = cart.product.productSalePrice;
                            tmp.productImage = cart.product.productImage;
                            tmp.option = cart.option;
                            tmp.giao_thu = "Giao vào " + (DateTime.Today.AddDays(2)).ToString("dd/MM");
                            tmp.quantity = cart.quantity;
                            tmp.total = cart.quantity * cart.product.productSalePrice;
                            list.Add(tmp);
                        }
                    }
                    item.list_cartItem = list;
                    response.Add(item);
                }
            }
            return response;
        }

        public async Task<bool> increaseCart(long cartId)
        {
            using (DataContext context = new DataContext())
            {
                SqlCart cart = context.carts.Where(s => s.ID == cartId && s.status == Status_Cart.active).FirstOrDefault();
                if (cart == null)
                {
                    return false;
                }
                else
                {
                    cart.quantity += 1;
                    await context.SaveChangesAsync();
                    return true;
                }
            }
        }
        public async Task<bool> decreaseCart(long cartId)
        {
            using (DataContext context = new DataContext())
            {
                SqlCart cart = context.carts.Where(s => s.ID == cartId).FirstOrDefault();
                if (cart == null)
                {
                    return false;
                }
                else
                {
                    if (cart.quantity > 1)
                    {
                        cart.quantity -= 1;
                        await context.SaveChangesAsync();
                    }
                    else if (cart.quantity ==1) 
                    {
                        cart.quantity = 0;
                        cart.status= Status_Cart.deleted;
                        await context.SaveChangesAsync();
                    }
                    else
                    {
                        return false;
                    }

                    return true;
                }
            }
        }
        public async Task<bool> removeCart(long cartId)
        {
            using (DataContext context = new DataContext())
            {
                SqlCart cart = context.carts.Where(s => s.ID == cartId && s.status==Status_Cart.active).FirstOrDefault();
                if (cart == null)
                {
                    return false;
                }
                else
                {
                    cart.status = Status_Cart.deleted;
                    await context.SaveChangesAsync();
                    return true;
                }
            }
        }
    }
}
