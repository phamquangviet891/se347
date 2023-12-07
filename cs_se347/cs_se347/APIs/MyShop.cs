using cs_se347.Model;

namespace cs_se347.APIs
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
                    item.danh_gia = "5.4tr+ đánh giá";

                    context.shops.Add(item);
                }
                await context.SaveChangesAsync();
            }
        }
    }
}
