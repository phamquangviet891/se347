using cs_se347.Controllers;
using cs_se347.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using static cs_se347.Model.Detail_Item;

namespace cs_se347.APIs
{
    public class MyProduct
    {
        public MyProduct() { }
        public async Task<List<HomePage_Product>> getListProductHomepage(int limit)
        {
            List<HomePage_Product> response = new List<HomePage_Product>();
            using (DataContext context = new DataContext())
            {
                List<SqlProduct> products = context.products.Include(s => s.category).Where(s => s.isDeleted == false).Take(limit).ToList();
                foreach (SqlProduct product in products)
                {
                    HomePage_Product item = new HomePage_Product();
                    item.ID = product.ID;
                    item.category = product.category.title;
                    item.productName = product.productName;
                    item.productImage = product.productImage;
                    item.productSalePrice = product.productSalePrice;
                    item.sold = product.sold;
                    item.rating = product.rating;
                    item.discount = product.discount;
                    item.giao_thu = "Giao vào " + (DateTime.Today.AddDays(2)).ToString("dd/MM");

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
                SqlProduct? product = context.products.Where(s => s.isDeleted == false && s.ID == productId).Include(s=>s.shop).AsNoTracking().FirstOrDefault();
                if (product == null)
                {
                    return response;
                }
                else
                {
                    response.ID = product.ID;
                    response.productName = product.productName;
                    response.productPrice = product.productPrice;
                    response.sold = product.sold;
                    response.rating = product.rating;
                    response.productSalePrice = product.productSalePrice;
                    response.discount = product.discount;
                    response.productImage = product.productImage;
                    response.productListImage = product.productListImage;
                    response.options = product.options;
                    response.description = product.description;
                    List< Detail_Item > detail = new List<Detail_Item>();
                    //response.detail = product.detail;
                    for(int i=1;i< product.detail.Count()-1; i+=2)
                    {
                        Detail_Item item = new Detail_Item();
                        item.key = product.detail[i];
                        item.value= product.detail[i+1];
                        detail.Add(item);
                    }
                    response.detail = detail;   
                    response.inventory = product.inventory;
                    response.shop_id = product.shop.ID;
                }
                return response;
            }
        }

        public async Task<bool> createNew(long shopId, long categoryId, string productName, string productImage, long productPrice, List<string> productListImage, int discount, List<string> options, List<string> detail, string description)
        {
            using (DataContext context = new DataContext())
            {
                SqlShop shop = context.shops.Where(s => s.ID == shopId).FirstOrDefault();
                if (shop == null)
                {
                    return false;
                }
                SqlCategory category = context.categories.Where(s => s.ID == categoryId).FirstOrDefault();
                if (category == null)
                {
                    return false;
                }
                SqlProduct existing = context.products.Where(s => s.productName == productName).FirstOrDefault();
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
                product.shop = shop;
                product.category = category;
                product.description = description;

                product.rating = DataContext.GenerateRandomRating();
                product.sold = DataContext.GenerateRandomValue();
                decimal roundedValue = ((product.productPrice * 100 - product.productPrice * product.discount) / 100 / 1000) * 1000;
                product.productSalePrice = (int)roundedValue;
                context.products.Add(product);
                await context.SaveChangesAsync();
            }

            return true;
        }

        public async Task<List<HomePage_Product>> getProductsByCategoryId(long categoryId, int limit)
        {
            List<HomePage_Product> response = new List<HomePage_Product>();
            using (DataContext context = new DataContext())
            {
                SqlCategory? category = context.categories.Where(s => s.ID == categoryId).FirstOrDefault();
                if (category == null)
                {
                    return response;
                }
                List<SqlProduct>? products = context.products.Where(s => s.category == category).Take(limit).ToList();
                foreach (SqlProduct product in products)
                {
                    HomePage_Product item = new HomePage_Product();
                    item.ID = product.ID;
                    item.category = category.title;
                    item.productName = product.productName;
                    item.productImage = product.productImage;
                    item.discount = product.discount;
                    item.productSalePrice = product.productSalePrice;
                    item.sold = product.sold;
                    item.rating = product.rating;
                    item.giao_thu = "Giao vào " + (DateTime.Today.AddDays(2)).ToString("dd/MM");
                    response.Add(item);
                }
                return response;
            }
        }

        public async Task<bool> updateSalePrice()
        {
            using (DataContext context = new DataContext())
            {
                List<SqlProduct> products = context.products.ToList();
                foreach (SqlProduct product in products)
                {
                    if (product != null)
                    {
                        decimal roundedValue = ((product.productPrice * 100 - product.productPrice * product.discount) / 100 / 1000) * 1000;
                        product.productSalePrice = (int)roundedValue;
                    }
                }
                await context.SaveChangesAsync();
            }
            return true;
        }

        public async Task<List<HomePage_Product>> getProductsByShopId(long shopId, int limit)
        {
            List<HomePage_Product> response = new List<HomePage_Product>();
            using (DataContext context = new DataContext())
            {
                SqlShop shop = context.shops.Where(s => s.ID == shopId).FirstOrDefault();
                if (shop == null)
                {
                    return response;
                }

                List<SqlProduct> products = context.products.Include(s => s.category).Include(s => s.shop).Where(s => s.isDeleted == false && s.shop == shop).Take(limit).ToList();
                foreach (SqlProduct product in products)
                {
                    HomePage_Product item = new HomePage_Product();
                    item.ID = product.ID;
                    item.category = product.category.title;
                    item.productName = product.productName;
                    item.productSalePrice = product.productSalePrice;
                    item.sold = product.sold;
                    item.productImage = product.productImage;
                    item.rating = product.rating;
                    item.discount = product.discount;
                    item.giao_thu = "Giao vào " + (DateTime.Today.AddDays(2)).ToString("dd/MM");

                    response.Add(item);
                }
            }
            return response;
        }

        public List<HomePage_Product> search(string key, int limit)
        {
            List<HomePage_Product> response = new List<HomePage_Product>();
            using (DataContext context = new DataContext())
            {
                List<SqlProduct> products = context.products.Where(s => s.productName.ToLower().Contains(key.ToLower()) || s.description.ToLower().Contains(key.ToLower())).Include(s => s.category).Take(15).ToList();
                if (products.Any())
                {
                    foreach (SqlProduct product in products)
                    {
                        HomePage_Product item = new HomePage_Product();
                        item.ID = product.ID;
                        item.category = product.category.title;
                        item.productName = product.productName;
                        item.productImage = product.productImage;
                        item.productPrice = product.productPrice;
                        item.productSalePrice = product.productSalePrice;
                        item.sold = item.sold;
                        item.rating = item.rating;
                        item.discount = item.discount;
                        item.giao_thu = "Giao vào " + (DateTime.Today.AddDays(2)).ToString("dd/MM");
                        response.Add(item);
                    }
                }
            }
            return response;
        }


        public async Task<bool> tool_delete_space_in_product_option()
        {
            using (DataContext context = new DataContext())
            {
                List<SqlProduct> products = context.products.Where(s => s.options.Any() == true).ToList();
                foreach (SqlProduct sqlProduct in products)
                {
                    for (int i = 1; i < sqlProduct.options.Count; i++)
                    {
                        if (sqlProduct.options[i].Last() == ' ')
                        {
                            sqlProduct.options[i] = sqlProduct.options[i].TrimEnd();
                        }
                        if (sqlProduct.options[i].First() == ' ')
                        {
                            sqlProduct.options[i] = sqlProduct.options[i].TrimStart();

                        }
                    }
                    context.Update(sqlProduct);
                }
                await context.SaveChangesAsync();
            }

            return true;
        }

    }
}
