using cs_se347.Controllers;
using cs_se347.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace cs_se347.APIs
{
    public class MyProduct
    {
        public MyProduct() { }
        public async Task<List<HomePage_Product>> getListProductHomepage()
        {
            List<HomePage_Product> response = new List<HomePage_Product>(); 
            using (DataContext context = new DataContext())
            {
                List<SqlProduct> products = context.products.Include(s=>s.category).Where(s=>s.isDeleted==false).ToList();
                foreach (SqlProduct product in products)
                {
                    HomePage_Product item = new HomePage_Product();
                    item.ID = product.ID;
                    item.category = product.category.title;
                    item.productName = product.productName;
                    item.productSalePrice = product.productSalePrice;
                    item.sold = product.sold;
                    item.rating = product.rating;
                    item.discount = product.discount;
                    item.giao_thu = "Giao vào "+ (DateTime.Today.AddDays(2)).ToString("dd/MM");

                    response.Add(item);
                }
            }
            return response;
        }
        public async Task<Detail_Product> getProductDetail(long productId)
        {
            Detail_Product response = new Detail_Product();
            using (DataContext context = new DataContext())
            {
                SqlProduct product = context.products.Where(s => s.isDeleted == false && s.ID == productId).FirstOrDefault();
                if (product == null)
                {
                    return response;
                }
                else
                {
                    response.ID = product.ID;
                    response.productName = product.productName;
                    response.productPrice= product.productSalePrice;
                    response.sold = product.sold;
                    response.rating = product.rating;
                    response.productSalePrice= product.productSalePrice;
                    response.discount = product.discount;
                    response.productImage= product.productImage;
                    response.productListImage= product.productListImage;
                    response.options= product.options;
                    response.description = product.description;
                    response.detail = product.detail;
                }
                return response;
            }
        }

        public async Task<bool> createNew(long shopId,long categoryId , string productName, string productImage, int productPrice, List<string> productListImage,int discount, List<string> options, List<string> detail, string description)
        {
            using (DataContext context = new DataContext())
            {
                SqlShop shop = context.shops.Where(s=>s.ID==shopId).FirstOrDefault();
                if (shop == null)
                {
                    return false;
                }
                SqlCategory category = context.categories.Where(s=>s.ID == categoryId).FirstOrDefault();
                if (category == null)
                {
                    return false;
                }
                SqlProduct existing = context.products.Where(s=>s.productName==productName).FirstOrDefault();
                if (existing != null)
                {
                    return false;
                }
                SqlProduct product = new SqlProduct();
                product.productName = productName;
                product.productImage = productImage;
                product.productListImage = productListImage;
                product.productPrice = productPrice;
                product.discount = discount;
                product.options = options;
                product.detail = detail;
                product.shop=shop;
                product.category=category; 
                product.description= description;

                product.rating = DataContext.GenerateRandomRating();
                product.sold = DataContext.GenerateRandomValue();
                context.products.Add(product);
                product.productSalePrice = (1 - discount/100) * productPrice;
                await context.SaveChangesAsync();
            }
            
            return true ;
        }

        public async Task<List<HomePage_Product>> getProductsByCategoryId(long categoryId)
        {
            List < HomePage_Product > response = new List<HomePage_Product> ();
            using (DataContext context = new DataContext())
            {
                SqlCategory category = context.categories.Where(s => s.ID == categoryId).FirstOrDefault() ;
                if (category == null)
                {
                    return response;
                }
                List<SqlProduct> products = context.products.Where(s=>s.category==category).ToList();
                foreach (SqlProduct product in products)
                {
                    HomePage_Product item = new HomePage_Product();
                    item.ID = product.ID;
                    item.category = category.title;
                    item.productName = product.productName;
                    item.discount = product.discount;
                    item.productSalePrice = product.productSalePrice;
                    item.sold = product.sold;
                    item.rating= product.rating;
                    item.giao_thu = "Giao vào " + (DateTime.Today.AddDays(2)).ToString("dd/MM");
                    response.Add(item);
                }
                return response;
            }
        }


    }
}
