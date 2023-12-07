using cs_se347.Model;
using System.ComponentModel.DataAnnotations.Schema;

namespace cs_se347.APIs
{
    public class MyCategory
    {
        public MyCategory() { }
        public async Task initAsync()
        {
            using(DataContext context = new DataContext())
            {
                SqlCategory? category = context.categories.Where(s=>s.title== "Đồ Chơi - Mẹ & Bé").FirstOrDefault();
                if (category == null)
                {
                    SqlCategory item = new SqlCategory();
                    item.title = "Đồ Chơi - Mẹ & Bé";
                    item.image = "https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp";
                    context.categories.Add(item);
                }
                category = context.categories.Where(s => s.title == "Điện Thoại - Máy Tính Bảng").FirstOrDefault();
                if (category == null)
                {
                    SqlCategory item = new SqlCategory();
                    item.title = "Điện Thoại - Máy Tính Bảng";
                    item.image = "https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp";
                    context.categories.Add(item);
                }
                category = context.categories.Where(s => s.title == "Làm Đẹp - Sức Khỏe").FirstOrDefault();
                if (category == null)
                {
                    SqlCategory item = new SqlCategory();
                    item.title = "Làm Đẹp - Sức Khỏe";
                    item.image = "https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png.webp";
                    context.categories.Add(item);
                }

                category = context.categories.Where(s => s.title == "Điện Gia Dụng").FirstOrDefault();
                if (category == null)
                {
                    SqlCategory item = new SqlCategory();
                    item.title = "Điện Gia Dụng";
                    item.image = "https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp";
                    context.categories.Add(item);
                }
                category = context.categories.Where(s => s.title == "Thời trang nữ").FirstOrDefault();
                if (category == null)
                {
                    SqlCategory item = new SqlCategory();
                    item.title = "Thời trang nữ";
                    item.image = "https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp";
                    context.categories.Add(item);
                }
                category = context.categories.Where(s => s.title == "Thời trang nam").FirstOrDefault();
                if (category == null)
                {
                    SqlCategory item = new SqlCategory();
                    item.title = "Thời trang nam";
                    item.image = "https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png.webp";
                    context.categories.Add(item);
                }
                category = context.categories.Where(s => s.title == "Giày - Dép nữ").FirstOrDefault();
                if (category == null)
                {
                    SqlCategory item = new SqlCategory();
                    item.title = "Giày - Dép nữ";
                    item.image = "https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png.webp";
                    context.categories.Add(item);
                }
                category = context.categories.Where(s => s.title == "Túi thời trang nữ").FirstOrDefault();
                if (category == null)
                {
                    SqlCategory item = new SqlCategory();
                    item.title = "Túi thời trang nữ";
                    item.image = "https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png.webp";
                    context.categories.Add(item);
                }
                category = context.categories.Where(s => s.title == "Giày - Dép nam").FirstOrDefault();
                if (category == null)
                {
                    SqlCategory item = new SqlCategory();
                    item.title = "Giày - Dép nam";
                    item.image = "https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp";
                    context.categories.Add(item);
                }
                category = context.categories.Where(s => s.title == "Túi thời trang nam").FirstOrDefault();
                if (category == null)
                {
                    SqlCategory item = new SqlCategory();
                    item.title = "Túi thời trang nam";
                    item.image = "https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png.webp";
                    context.categories.Add(item);
                }
                category = context.categories.Where(s => s.title == "Balo và Vali").FirstOrDefault();
                if (category == null)
                {
                    SqlCategory item = new SqlCategory();
                    item.title = "Balo và Vali";
                    item.image = "https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png.webp";
                    context.categories.Add(item);
                }
                category = context.categories.Where(s => s.title == "Phụ kiện thời trang").FirstOrDefault();
                if (category == null)
                {
                    SqlCategory item = new SqlCategory();
                    item.title = "Phụ kiện thời trang";
                    item.image = "https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png.webp";
                    context.categories.Add(item);
                }
                await context.SaveChangesAsync();

            }
        }
        public async Task<List<SqlCategory>> getListCategories()
        {
            List<SqlCategory> response = new List<SqlCategory>();
            using (DataContext context = new DataContext())
            {
                List<SqlCategory> categories = context.categories.ToList();
                foreach (SqlCategory category in categories)
                {
                    SqlCategory item = new SqlCategory();
                    item.ID = category.ID;
                    item.title = category.title;
                    item.image = category.image;

                    response.Add(item);
                }
            }
            return response;
        }

    }
}
