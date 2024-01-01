using Microsoft.EntityFrameworkCore;
using se347_be.Model;
using System.Collections.Generic;

namespace se347_be.APIs
{
    public class MyShop
    {
        public async Task initAsync()
        {
            using (DataContext context = new DataContext())
            {
                SqlShop? shop = context.shops.Where(s => s.name == "Tiki Trading").FirstOrDefault();
                if (shop == null)
                {
                    SqlShop item = new SqlShop();
                    item.name = "Tiki Trading";
                    item.logo = "https://vcdn.tikicdn.com/cache/w100/ts/seller/21/ce/5c/b52d0b8576680dc3666474ae31b091ec.jpg.webp";
                    item.rating = 4.7;
                    item.so_nguoi_danh_gia = 267;

                    context.shops.Add(item);
                }

                await context.SaveChangesAsync();
            }
        }
        public Detail_Shop getShop(long shopId)
        {
            Detail_Shop response = new Detail_Shop();
            using (DataContext context = new DataContext())
            {
                SqlShop? shop = context.shops.Where(s => s.ID == shopId).Include(s => s.products).FirstOrDefault();
                if (shop == null)
                {
                    return response;
                }
                else
                {
                    response.shop_id = shop.ID;
                    response.logo = shop.logo;
                    response.rating = shop.rating;
                    response.name = shop.name;
                    response.so_nguoi_danh_gia = shop.so_nguoi_danh_gia;
                    response.tong_san_pham = shop.products.Count();
                }
                return response;
            }
        }
        /*dư*/
        public List<HomePage_Product> view_products(long shop_id, int page)
        {
            List<HomePage_Product> response = new List<HomePage_Product>();
            using (DataContext context = new DataContext())
            {
                SqlShop? shop = context.shops.Where(s => s.ID == shop_id).Include(s => s.products).ThenInclude(s => s.category).FirstOrDefault();
                if (shop == null)
                {
                    return response;
                }
                if (page * 12 <= shop.products.Count())
                {
                    List<SqlProduct> products = shop.products;
                    for (int i = 12 * (page - 1); i < page * 12; i++)
                    {
                        HomePage_Product item = new HomePage_Product();
                        item.ID = products[i].ID;
                        item.category = products[i].category.title;
                        item.productName = products[i].productName;
                        item.productImage = products[i].productImage;
                        item.productPrice = products[i].productPrice;
                        item.productSalePrice = products[i].productSalePrice;
                        item.sold = products[i].sold;
                        item.rating = products[i].rating;
                        item.discount = products[i].discount;
                        item.giao_thu = "Giao vào " + (DateTime.Today.AddDays(2)).ToString("dd/MM");
                        item.slug = DataContext.GetSlug(item.productName);

                        response.Add(item);
                    }
                }
            }
            return response;
        }
        public List<SqlCategory> view_categories(long shop_id)
        {
            List<SqlCategory> response = new List<SqlCategory>();
            using (DataContext context = new DataContext())
            {
                SqlShop? shop = context.shops.Where(s => s.ID == shop_id).Include(s => s.products).ThenInclude(s => s.category).FirstOrDefault();
                if (shop == null)
                {
                    return response;
                }
                List<SqlProduct> products = shop.products;
                foreach (SqlProduct item in products)
                {
                    if (!response.Contains(item.category))
                    {
                        response.Add(item.category);
                    }
                }
            }
            return response;
        }
    }
}
