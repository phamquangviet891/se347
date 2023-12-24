using cs_se347.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace cs_se347.APIs
{
    public class MyCart
    {
        public MyCart() { }
        public class CartItem_DTO
        {
            public long cartItem_id { get; set; }
            public long product_id { get; set; }
            public string productName { get; set; }
            public long productPrice { get; set; }
            public int discount { get; set; }
            public long productSalePrice { get; set; }
            public string productImage { get; set; }
            public string? option { get; set; }
            public int quantity { get; set; }
            public long productAmount { get; set; }
            public string giao_thu { get; set; } = "Giao vào " + (DateTime.Today.AddDays(2)).ToString("dd/MM");
            public int inventory { get; set; } = 100;

        }
        public class Carts_DTO
        {
            public long cart_id { get; set; }
            public long shop_id { get; set; }
            public string shop { get; set; } = "";
            public List<CartItem_DTO> list_cartItem { get; set; } = new List<CartItem_DTO>();
            //public List voucher 
        }
        public async Task<bool> addToCart(long userId, long productId, string option, int quantity)
        {
            using (DataContext context = new DataContext())
            {
                SqlUser? user = context.users!.Where(s => s.ID == userId).FirstOrDefault();
                if (user == null)
                {
                    return false;
                }
                SqlProduct? product = context.products!.Include(s => s.shop).Where(s => s.ID == productId).FirstOrDefault();
                if (product == null)
                {
                    return false;
                }
                SqlShop? shop = product.shop;
                if (shop == null)
                {
                    return false;
                }
                if (product.options.Count > 1 && !product.options.Contains(option))
                {
                    return false;
                }

                SqlCartItem? cart_item = new SqlCartItem();
                SqlCart? cart = context.carts.Where(s => s.isDeleted == false && s.shop == shop && s.user == user).Include(s => s.cart_items).FirstOrDefault();
                if (cart != null) // nếu đã có cart của shop trong db rồi
                {//tìm cartitem
                    cart_item = cart.cart_items.Where(s => s.isDeleted == false && s.status == Status_Cart_item.active && s.product == product && s.option == option).FirstOrDefault();
                    if (cart_item != null) //nếu có
                    {//thì tăng số lương
                        cart_item.quantity += quantity;
                        await context.SaveChangesAsync();
                    }
                    else//nếu ko có cartitem sẵn
                    {//thì thêm cart mới
                        cart_item = new SqlCartItem();
                        if (product.options.Contains(option))
                        {
                            cart_item.option = option;
                        }
                        else
                        {
                            cart_item.option = "";
                        }
                        cart_item.cart = cart;
                        cart_item.quantity = quantity;
                        cart_item.product = product;
                        context.cart_items.Add(cart_item);
                        await context.SaveChangesAsync();
                    }
                }
                else // nếu chưa có shop 
                {
                    cart = new SqlCart();
                    cart.shop = shop;
                    cart.user = user;
                    context.carts.Add(cart);

                    cart_item.cart = cart;
                    //cart_item.option = option;
                    if (product.options.Contains(option))
                    {
                        cart_item.option = option;
                    }
                    else
                    {
                        cart_item.option = "";
                    }
                    cart_item.product = product;
                    cart_item.quantity = quantity;
                    context.cart_items.Add(cart_item);
                    await context.SaveChangesAsync();
                }
                return true;
            }
        }

        public List<Carts_DTO> getCartsByUserId(long userId)
        {
            List<Carts_DTO> response = new List<Carts_DTO>();
            using (DataContext context = new DataContext())
            {
                SqlUser? user = context.users!.Where(s => s.ID == userId).FirstOrDefault();
                if (user == null)
                {
                    return response;
                }

                //List<SqlCart>? carts = context.carts.Include(s => s.user).Include(s => s.shop).Where(s => s.isDeleted == false && s.user == user && s.status == Status_Cart.active).ToList();
                List<SqlCart>? carts = context.carts.Include(s => s.user).Include(s => s.cart_items).ThenInclude(s => s.product).Where(s => s.isDeleted == false && s.user == user).Include(s => s.shop).ToList();
                if (carts.Count == 0)
                {
                    return response;
                }
                foreach (SqlCart cart in carts)
                {
                    Carts_DTO cart_DTO = new Carts_DTO();
                    //SqlShop? shop = context.shops.Where(s => s.isDeleted == true && s == cart.shop).FirstOrDefault();
                    SqlShop shop = cart.shop;
                    if (shop == null)
                    {
                        continue;
                    }
                    cart_DTO.shop = shop.name;
                    cart_DTO.cart_id = cart.ID;
                    cart_DTO.shop_id = shop.ID;

                    List<CartItem_DTO> list_cartItem = new List<CartItem_DTO>();
                    List<SqlCartItem> cart_items = cart.cart_items;
                    if (cart_items.Where(s => s.status == Status_Cart_item.active && s.isDeleted == false).Count() == 0)
                    {
                        continue;
                    }
                    foreach (SqlCartItem item in cart_items)
                    {
                        if (item.isDeleted)
                        {
                            continue;
                        }
                        if (item.status == Status_Cart_item.active)
                        {
                            CartItem_DTO tmp = new CartItem_DTO();
                            tmp.cartItem_id = item.ID;
                            tmp.product_id = item.product.ID;
                            tmp.quantity = item.quantity;
                            if (item.product.options.Any())
                            {
                                tmp.option = item.product.options[0] + " " + item.option;
                            }
                            tmp.productSalePrice = item.product.productSalePrice;
                            tmp.productPrice = item.product.productPrice;
                            tmp.discount = item.product.discount;
                            tmp.productName = item.product.productName;
                            tmp.productImage = item.product.productImage;
                            tmp.productAmount = item.product.productSalePrice * item.quantity;
                            tmp.inventory = item.product.inventory;
                            list_cartItem.Add(tmp);
                        }
                    }
                    cart_DTO.list_cartItem = list_cartItem;
                    response.Add(cart_DTO);
                }
            }
            return response;
        }

        public async Task<bool> increaseCartItem(long cartItem_id)
        {
            using (DataContext context = new DataContext())
            {
                SqlCartItem? cart_item = context.cart_items.Where(s => s.ID == cartItem_id && s.isDeleted == false).FirstOrDefault();
                if (cart_item == null)
                {
                    return false;
                }
                else
                {
                    cart_item.quantity += 1;
                    await context.SaveChangesAsync();
                    return true;
                }
            }
        }
        public async Task<bool> decreaseCartItem(long cartItem_id)
        {
            using (DataContext context = new DataContext())
            {
                SqlCartItem? cart_item = context.cart_items.Include(s => s.cart).Where(s => s.ID == cartItem_id && s.isDeleted == false).FirstOrDefault();
                if (cart_item == null)
                {
                    return false;
                }
                else
                {
                    if (cart_item.quantity > 1)
                    {
                        cart_item.quantity -= 1;
                        await context.SaveChangesAsync();
                    }
                    else if (cart_item.quantity == 1)
                    {
                        cart_item.quantity = 0;
                        cart_item.isDeleted = true;
                        int count = context.cart_items.Include(s => s.cart).Where(s => s.isDeleted == false && s.cart == cart_item.cart).Count();
                        if (count == 1)
                        {
                            cart_item.cart.isDeleted = true;
                        }
                        await context.SaveChangesAsync();
                    }
                    return true;
                }
            }
        }
        public async Task<bool> removeCartItem(long cartItem_id)
        {
            using (DataContext context = new DataContext())
            {
                SqlCartItem? cart_item = context.cart_items.Include(s => s.cart).Where(s => s.ID == cartItem_id && s.isDeleted == false).FirstOrDefault();
                if (cart_item == null)
                {
                    return false;
                }
                else
                {
                    cart_item.isDeleted = true;
                    int count = context.cart_items.Include(s => s.cart).Where(s => s.isDeleted == false && s.cart == cart_item.cart).Count();
                    if (count == 1)
                    {
                        cart_item.cart.isDeleted = true;
                    }
                    await context.SaveChangesAsync();
                    return true;
                }
            }
        }
    }
}
