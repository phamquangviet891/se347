using Microsoft.EntityFrameworkCore;
using se347_be.Model;
using System.Collections.Generic;

namespace se347_be.APIs
{
    public class MyVoucher
    {
        public MyVoucher() { }
        public async Task initAsyn()
        {
            using (DataContext context = new DataContext())
            {
                SqlShop shop = context.shops.Where(s => s.ID == 1).FirstOrDefault();

                SqlVoucher item = context.vouchers.Where(s => s.title == "Ca shop").FirstOrDefault();
                if (item == null)
                {
                    SqlVoucher voucher = new SqlVoucher();
                    voucher.title = "Ca shop";
                    voucher.expire_date = DateTime.UtcNow.AddDays(2);
                    voucher.public_date = DateTime.UtcNow;
                    voucher.discountAmount = 10;
                    voucher.shop = shop;
                    voucher.type = true;
                    context.vouchers.Add(voucher);
                }
                item = context.vouchers.Where(s => s.title == "Chi product 30").FirstOrDefault();
                if (item == null)
                {
                    SqlVoucher voucher = new SqlVoucher();
                    voucher.title = "Chi product 30";
                    voucher.expire_date = DateTime.UtcNow.AddDays(2);
                    voucher.public_date = DateTime.UtcNow;
                    voucher.discountAmount = 30;
                    voucher.shop = shop;
                    voucher.type = false;
                    SqlProduct? product = context.products.Where(s => s.ID == 30).FirstOrDefault();
                    voucher.list_product_applied.Add(product.ID.ToString());
                    context.vouchers.Add(voucher);
                }
                await context.SaveChangesAsync();
            }
        }

        public List<Product_Voucher> getListVoucherProductPage(long userId, long productId)
        {
            List<Product_Voucher> response = new List<Product_Voucher>();
            using (DataContext context = new DataContext())
            {
                SqlUser? user = context.users.Where(s => s.ID == userId).FirstOrDefault();
                if (userId == null)
                {
                    return response;
                }
                SqlProduct? product = context.products.Include(s => s.shop).Where(s => s.ID == productId).FirstOrDefault();
                if (productId == null)
                {
                    return response;
                }
                SqlShop shop = product.shop;


                List<SqlVoucher>? list_vouchers = context.vouchers!.Where(
                                                                s => s.isDeleted == false && 
                                                                     s.list_user_applied.Contains(user.ID.ToString()) == false
                                                                     //s.shop == shop
                                                                     ).ToList();
                foreach (SqlVoucher voucher in list_vouchers)
                {
                    if (voucher.expire_date.CompareTo(DateTime.Now) < 0)
                    {
                        continue;
                    }

                    if (voucher.type) // voucher cho tất cả product
                    {
                        Product_Voucher item = new Product_Voucher();
                        item.voucher_ID = voucher.ID;
                        item.title = voucher.title;
                        item.expire_date = voucher.expire_date;
                        item.image = voucher.image;
                        item.minimum_order_price = voucher.minimum_order_price;
                        item.discountAmount = voucher.discountAmount;
                        response.Add(item);
                    }
                    else if (voucher.list_product_applied.Contains(product.ID.ToString()))// voucher cho từng product riêng biệt
                    {
                        Product_Voucher item = new Product_Voucher();
                        item.voucher_ID = voucher.ID;
                        item.title = voucher.title;
                        item.expire_date = voucher.expire_date;
                        item.image = voucher.image;
                        item.discountAmount = voucher.discountAmount;
                        item.minimum_order_price = voucher.minimum_order_price;
                        response.Add(item);
                    }
                }
                return response;

            }
        }

        public class Voucher_DTO
        {
            public string title { get; set; }
            public DateTime public_date { get; set; } = DateTime.UtcNow;
            public DateTime expire_date { get; set; } = DateTime.UtcNow;
            public int discountAmount { get; set; } = 0;
            public long minimum_order_price { get; set; } = 0;
            public string image { get; set; } = "";
            public bool type { get; set; } = true;
            //true là cả shop, false là 1 vài sản phẩm
            public List<string>? list_product_applied { get; set; } = new List<string>();

        }
        public async Task<bool> addNewVoucher(long shopId, Voucher_DTO _dto)
        {
            if (string.IsNullOrEmpty(_dto.title) || string.IsNullOrEmpty(_dto.image))
            {
                return false;
            }
            using (DataContext context = new DataContext())
            {
                SqlShop? shop = context.shops.Where(s => s.ID == shopId).FirstOrDefault();
                if (shop == null)
                {
                    return false;
                }
                if (_dto.type)// all shop, list_product = null
                {
                    SqlVoucher allShop = new SqlVoucher();
                    allShop.title = _dto.title;
                    allShop.image = _dto.image;
                    allShop.type = _dto.type;
                    allShop.shop = shop;
                    allShop.expire_date = _dto.expire_date;
                    allShop.public_date = _dto.public_date;
                    allShop.discountAmount = _dto.discountAmount;
                    allShop.minimum_order_price = _dto.minimum_order_price;
                    allShop.list_product_applied = null;
                    context.vouchers.Add(allShop);
                    shop.vouchers.Add(allShop);
                }
                else
                {
                    SqlVoucher someProduct = new SqlVoucher();
                    someProduct.title = _dto.title;
                    someProduct.image = _dto.image;
                    someProduct.type = _dto.type;
                    someProduct.shop = shop;
                    someProduct.expire_date = _dto.expire_date;
                    someProduct.public_date = _dto.public_date;
                    someProduct.discountAmount = _dto.discountAmount;
                    someProduct.minimum_order_price = _dto.minimum_order_price;
                    someProduct.list_product_applied = _dto.list_product_applied;
                    context.vouchers.Add(someProduct);
                    shop.vouchers.Add(someProduct);
                }
                await context.SaveChangesAsync();
                return true;
            }
        }

        public List<Product_Voucher> getVoucherByCart(long cart_id)
        {
            List<Product_Voucher> response = new List<Product_Voucher>();
            using (DataContext context = new DataContext())
            {
                SqlCart? cart = context.carts.Include(s => s.shop).ThenInclude(s => s.vouchers).Where(s => s.ID == cart_id).FirstOrDefault();
                if (cart == null)
                {
                    return response;
                }
                else if (cart.shop.vouchers.Any())
                {
                    List<SqlVoucher> vouchers = cart.shop.vouchers;
                    foreach (SqlVoucher item in vouchers)
                    {
                        if (item.expire_date.CompareTo(DateTime.Now) < 0)
                        {
                            continue;
                        }
                        Product_Voucher tmp = new Product_Voucher();
                        tmp.voucher_ID = item.ID;
                        tmp.title = item.title;
                        tmp.minimum_order_price = item.minimum_order_price;
                        tmp.image = tmp.image;
                        tmp.expire_date = item.expire_date;
                        tmp.discountAmount = item.discountAmount;
                        
                        response.Add(tmp);
                    }
                }
                return response;
            }
        }

        public List<Product_Voucher> getVouchersInShop(long shop_id, int page, int page_size)
        {
            List<Product_Voucher> response = new List<Product_Voucher> ();
            using(DataContext context =  new DataContext())
            {
                SqlShop? shop = context.shops.Where(s=>s.ID == shop_id).Include(s=>s.vouchers).FirstOrDefault();
                if (shop == null) {
                    return response;
                }
                if (shop.vouchers.Any())
                {
                    List<SqlVoucher> shop_vouchers = shop.vouchers;
                    shop_vouchers = shop_vouchers.Skip((page - 1) * page_size).Take(page_size).ToList();

                    foreach (SqlVoucher item in shop_vouchers)
                    {
                        if (item.expire_date.CompareTo(DateTime.Now) < 0)
                        {
                            continue;
                        }
                        Product_Voucher tmp = new Product_Voucher();
                        tmp.voucher_ID = item.ID;
                        tmp.title = item.title;
                        tmp.minimum_order_price = item.minimum_order_price;
                        tmp.image = tmp.image;
                        tmp.expire_date = item.expire_date;
                        tmp.discountAmount = item.discountAmount;

                        response.Add(tmp);
                    }
                }
                return response;
            }
        }
        public List<Product_Voucher> warehouse_shop_voucher(long user_id, int page, int page_size)
        {
            List < Product_Voucher > response = new List<Product_Voucher>();
            using (DataContext context = new DataContext())
            {
                SqlUser? user = context.users.Where(s=>s.ID==user_id).Include(s=>s.vouchers).FirstOrDefault();
                if(user == null)
                {
                    return response;
                }
                List<SqlVoucher>? shop_vouchers = user.vouchers.ToList();
                if (shop_vouchers != null && shop_vouchers.Any())
                {
                    shop_vouchers = shop_vouchers!.Where(s => s.expire_date > DateTime.UtcNow 
                                                &&
                                                (s.list_user_applied==null
                                                || !s.list_user_applied.Contains(user_id.ToString()))
                                                ).ToList();
                    
                }
                shop_vouchers = shop_vouchers.Skip((page - 1) * page_size).Take(page_size).ToList();
                if(shop_vouchers != null && shop_vouchers.Any())
                {
                    foreach(SqlVoucher item in shop_vouchers) 
                    {
                        Product_Voucher tmp =  new Product_Voucher();
                        tmp.image = item.image;
                        tmp.expire_date=item.expire_date;
                        tmp.title = item.title;
                        tmp.minimum_order_price = item.minimum_order_price;
                        tmp.voucher_ID = item.ID;
                        tmp.discountAmount = item.discountAmount;

                        response.Add(tmp);
                    }
                }
            }
            return response;
        }

        public async Task<bool> warehouse_save(long user_id, long voucher_id)
        {
            using(DataContext context = new DataContext()) {
                SqlUser? user = context.users.Where(s=>s.ID == user_id).FirstOrDefault();

                if (user == null)
                {
                    return false;
                }
                SqlVoucher? voucher = context.vouchers.Where(s=>s.isDeleted==false && s.ID==voucher_id && s.expire_date > DateTime.UtcNow).FirstOrDefault();
                if(voucher == null) {
                    return false;
                }

                if(user.vouchers!= null && user.vouchers.Any())
                {
                    if (user.vouchers.Contains(voucher))
                    {
                        return false;
                    }
                }
                else
                {
                    // test
                    List<SqlVoucher>? vouchers = new List<SqlVoucher>();
                    vouchers.Insert(0,voucher);
                    user.vouchers = vouchers;
                    await context.SaveChangesAsync();
                }
            }

            return true;
        }
    }
}
