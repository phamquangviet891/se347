using Microsoft.EntityFrameworkCore;
using se347_be.Model;
using System.Collections.Generic;

namespace se347_be.APIs
{
    public class MySellser
    {
        public MySellser() { }
        public class Shop_RES
        {
            public long shop_id { get; set; }
        }
        /* public Shop_RES switch_to_seller(long user_id)
         {
             Shop_RES response = new Shop_RES();
             using (DataContext context = new DataContext())
             {
                 SqlUser user = context.users.Where(s => s.ID == user_id).Include(s => s.shops).FirstOrDefault();
                 if(user == null)
                 {
                     return response;
                 }
                 if(user.shops.Count() == 0) {

                     return response;
                 }
                 response.shop_id = user.shops[0].ID;
                 return response;
             }
         }*/
        public List<Shop_Short> getShopList(long userId)
        {
            List<Shop_Short> response = new List<Shop_Short>();
            using (DataContext context = new DataContext())
            {
                SqlUser user = context.users.Include(s => s.shops).Where(s => s.ID == userId).FirstOrDefault();
                if (user == null)
                {
                    return response;
                }
                List<SqlShop>? list_shop = user.shops;
                if (list_shop == null)
                {
                    return response;
                }
                foreach (SqlShop item in list_shop)
                {
                    Shop_Short shop = new Shop_Short();
                    shop.name = item.name;
                    shop.shop_id = item.ID;
                    shop.logo = item.logo;
                    response.Add(shop);
                }
                return response;
            }
        }
        public enum Seller_Product_Status
        {
            live,
            soldOut,
            Violation,
            Delisted,
            Unpuplished
        }
        public string convert_to_status(int status)
        {
            if (status == 0) { return "live"; }
            if (status == 1) { return "soldOut"; }
            if (status == 2) { return "violation"; }
            if (status == 3) { return "delisted"; }
            if (status == 4) { return "unpublish"; }
            return "error";
        }
        public class Product_Seller
        {
            public long product_id { get; set; }
            public string productName { get; set; } = "";
            public long productPrice { get; set; } = 0;
            public int sold { get; set; } = 0;
            public string productImage { get; set; } = "";
            public int inventory { get; set; }
            public string status { get; set; }
        }
        public List<Product_Seller> get_My_Products(long shop_id, int limit)
        {
            List<Product_Seller> response = new List<Product_Seller>();
            using (DataContext context = new DataContext())
            {
                SqlShop? shop = context.shops.Where(s => s.ID == shop_id).Include(s => s.products).FirstOrDefault();
                if (shop == null)
                {
                    return response;
                }
                List<SqlProduct>? products = new List<SqlProduct>();
                if (shop.products.Any())
                {
                    products = shop.products;
                }
                for(int i=0;i< products.Count;i++)
                {
                    Product_Seller tmp = new Product_Seller();
                    tmp.product_id = products[0].ID;
                    tmp.productName = products[0].productName;
                    tmp.productPrice = products[0].productPrice;
                    tmp.sold = products[0].sold;
                    tmp.productImage = products[0].productImage;
                    tmp.inventory = products[0].inventory;
                    if (tmp.inventory < 1)
                    {
                        tmp.status = convert_to_status(1);
                    }
                    else if (products[0].isDeleted)
                    {
                        tmp.status = convert_to_status(3);
                    }
                    else
                    {
                        tmp.status = convert_to_status(0);
                    }
                    response.Add(tmp);
                }
            }
            return response;
        }
    }
}
