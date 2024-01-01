using Microsoft.EntityFrameworkCore;
using se347_be.Model;
using Serilog;
using System.Text;
using System.Text.RegularExpressions;

namespace se347_be.APIs
{
    public class MyProduct
    {
        public MyProduct() { }
        public async Task<List<HomePage_Product>> getListProductHomepage()
        {
            List<HomePage_Product> response = new List<HomePage_Product>();
            using (DataContext context = new DataContext())
            {
                List<SqlProduct> products = context.products.Include(s => s.category).Where(s => s.isDeleted == false).ToList();
                foreach (SqlProduct product in products)
                {
                    HomePage_Product item = new HomePage_Product();
                    item.ID = product.ID;
                    item.category = product.category.title;
                    item.productName = product.productName;
                    item.productImage= product.productImage;
                    item.productPrice = product.productPrice;
                    item.productSalePrice = product.productSalePrice;
                    item.sold = product.sold;
                    item.rating = product.rating;
                    item.discount = product.discount;
                    item.giao_thu = "Giao vào " + (DateTime.Today.AddDays(2)).ToString("dd/MM");
                    item.slug = DataContext.GetSlug(item.productName);

                    response.Add(item);
                }
            }
            return response;
        }
        public  Detail_Product getProductDetail(long productId)
        {
            Detail_Product response = new Detail_Product();
            using (DataContext context = new DataContext())
            {
                SqlProduct? product = context.products.Include(s=>s.shop).Where(s => s.isDeleted == false && s.ID == productId).Include(s=>s.category).FirstOrDefault();
                if (product == null)
                {
                    return response;
                }
                else
                {
                    response.ID = product.ID;
                    response.category_id = product.category.ID;
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
                    response.detail = product.detail;
                    response.shopId = product.shop.ID;
                    response.inventory = product.inventory;
                    response.brand = product.brand;
                }
                return response;
            }
        }

        public class Detail_RES
        {
            public Detail_Product product = new Detail_Product();
            public Detail_Shop shop = new Detail_Shop();
            public List<Product_Voucher> vouchers = new List<Product_Voucher>();
        }
        //public Detail_Product detail_page( long productId)
        //{
        //    Detail_RES response = new Detail_RES();
        //    Detail_Product product = getProductDetail(productId);
        //    response.product= product;
        //    Detail_Shop shop = Program.api_shop.getShop(product.shopId);
        //    response.shop= shop;
        //    List<Product_Voucher> vouchers = Program.api_voucher.getListVoucherProductPage(userId, productId);
        //    response.vouchers= vouchers;

        //    return response;
        //}

        public async Task<bool> createNew(long shopId, long categoryId, string productName, long productPrice, 
                    List<string> productListImage,List<string> productVideos,  List<string> options, string description)
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
                SqlProduct? existing = context.products.Where(s => s.productName == productName).FirstOrDefault();
                if (existing != null)
                {
                    return false;
                }
                SqlProduct product = new SqlProduct();
                product.productName = productName;
                product.productImage = productListImage[0];
                product.productListImage = productListImage;
                product.productPrice = productPrice;
                //product.discount = discount;
                product.options = options;
                //product.detail = detail;
                product.shop = shop;
                product.category = category;
                product.description = description;
                product.status = 4;

                product.rating = DataContext.GenerateRandomRating();
                product.sold = DataContext.GenerateRandomValue();
                decimal roundedValue = ((product.productPrice * 100 - product.productPrice * product.discount) / 100 / 1000) * 1000;
                product.productSalePrice = (int)roundedValue;
                context.products.Add(product);
                await context.SaveChangesAsync();
            }

            return true;
        }

        public List<HomePage_Product> get_by_category(long categoryId, int limit)
        {
            List<HomePage_Product> response = new List<HomePage_Product>();
            using (DataContext context = new DataContext())
            {
                SqlCategory? category = context.categories.Where(s => s.ID == categoryId).FirstOrDefault();
                if (category == null)
                {
                    return response;
                }
                List<SqlProduct> products = context.products.Where(s =>s.status==0 &&  s.category == category).Take(limit).ToList();
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
                    item.slug = DataContext.GetSlug(item.productName);
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
        public List<HomePage_Product> search(string key, int page)
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
                        item.slug = DataContext.GetSlug(item.productName);
                        response.Add(item);
                    }
                }
            }
            return response;
        }

        public async Task<List<HomePage_Product>> getProductsByShopId(long shopId, int page)
        { 
            List<HomePage_Product> response = new List<HomePage_Product>();
            using (DataContext context = new DataContext())
            {
                SqlShop shop = context.shops.Where(s => s.ID == shopId).FirstOrDefault();
                if (shop == null)
                {
                    return response;
                }

                List<SqlProduct> products = context.products.Include(s => s.category).Include(s => s.shop).Where(s => s.isDeleted == false && s.shop == shop).ToList();
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
                    item.giao_thu = "Giao vào " + (DateTime.Today.AddDays(2)).ToString("dd/MM");
                    item.slug = DataContext.GetSlug(item.productName);
                    response.Add(item);
                }
            }
            return response;
        }

        public async Task<bool> tool_update_brand()
        {
            using(DataContext context = new DataContext())
            {
                List<SqlProduct> products = context.products.ToList();
                foreach (SqlProduct product in products)
                {
                    product.brand = "SE214";
                }
                await context.SaveChangesAsync();
            }
            return true;
        }

        public async Task<bool> tool_update_status()
        {
            using (DataContext context = new DataContext())
            {
                List<SqlProduct> products = context.products.ToList();
                foreach (SqlProduct product in products)
                {
                    product.status = 0;
                }
                await context.SaveChangesAsync();
            }
            return true;
        }

        public List<HomePage_Product> random_product(int limit)
        {
            List<HomePage_Product> response = new List<HomePage_Product>();
            using(DataContext context = new DataContext())
            {
                List<SqlProduct> products = context.products.Where(s => s.status == 0).Include(s=>s.category).ToList();
                List<SqlProduct> randomProducts = products.OrderBy(x => Guid.NewGuid()).Take(limit).ToList();
                foreach(SqlProduct product in randomProducts)
                {
                    HomePage_Product item = new HomePage_Product();
                    item.ID = product.ID;
                    item.category = product.category.title;
                    item.productName = product.productName;
                    item.productImage = product.productImage;
                    item.productPrice = product.productPrice;
                    item.productSalePrice = product.productSalePrice;
                    item.sold = product.sold;
                    item.rating = product.rating;
                    item.discount = product.discount;
                    item.giao_thu = "Giao vào " + (DateTime.Today.AddDays(2)).ToString("dd/MM");
                    item.slug = DataContext.GetSlug(item.productName);
                    response.Add(item);
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

        public async Task tool_update_brand_toSe347()
        {
            using(DataContext context = new DataContext())
            {
                List<SqlProduct> products = context.products.ToList();
                foreach(SqlProduct item in products)
                {
                    item.brand = "SE347";
                }
                await context.SaveChangesAsync();
            }
        }
    }
}
