using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Newtonsoft.Json;
using se347_be.Model;
using static se347_be.Controllers.ReviewController;

namespace se347_be.APIs
{
    public class MyReview
    {
        public MyReview() { }
        public async Task<bool> createNew(long userId, long cart_item_id, double rating, string des, List<IFormFile> form_files)
        {
            using (DataContext context = new DataContext())
            {
                SqlUser? user = context.users.Where(s => s.ID == userId).FirstOrDefault();
                if (user == null)
                {
                    return false;
                }
                SqlCartItem? cart_item = context.cart_items.Include(s => s.order).Where(s => s.ID == cart_item_id && s.status == Status_Cart_item.order).Include(s => s.product).FirstOrDefault();
                if (cart_item == null)
                {
                    return false;
                }
                if (!(cart_item.order.status == Status_Order.da_giao))
                {
                    return false;
                }
                SqlReview? review = context.reviews.Where(s => s.user == user && s.cart_item == cart_item).FirstOrDefault();// mỗi user chỉ được review 1 lần
                if (review != null)
                {
                    return false;
                }

                SqlReview item = new SqlReview();
                List<string> list_imgs = new List<string>();
                foreach (IFormFile item_file in form_files)
                {
                    string url = await Program.api_cloudinary.uploadImage(item_file);
                    if (!string.IsNullOrEmpty(url))
                    {
                        list_imgs.Add(url);
                    }
                }
                item.list_imgs = list_imgs;
                item.product = cart_item.product;
                item.user = user;
                item.cart_item = cart_item;
                item.rating = rating;
                item.description = des;
                item.option = cart_item.option;
                item.product = cart_item.product;
                item.date = DateTime.UtcNow;
                context.reviews.Add(item);
                await context.SaveChangesAsync();
                return true;
            }
        }
        public string getByproduct(long productId, int tab, int page, int page_size)
        {
            Detail_review response = new Detail_review();
            List<Item_Review> list_item = new List<Item_Review>();
            using (DataContext context = new DataContext())
            {
                SqlProduct? product = context.products.Where(s => s.ID == productId).Include(s => s.reviews).ThenInclude(s => s.user).FirstOrDefault();
                if (product == null)
                {
                    return "";
                }
                // tính average
                double average_rating=0;
                List<SqlReview> list = product.reviews;
                list.ForEach(s => { average_rating += s.rating; }); 
                average_rating /= list.Count();

                //tính số lượng các review của từng sao
                int five_star_count = list.Where(s=>s.rating==5).Count();
                int four_star_count = list.Where(s=>s.rating==4).Count();
                int three_star_count = list.Where(s=>s.rating==3).Count();
                int two_star_count = list.Where(s=>s.rating==2).Count();
                int one_star_count = list.Where(s=>s.rating==1).Count();
                if (product.reviews.Count == 0)
                {
                    return "";
                }
                if (tab == 5)
                {
                    list = list.Where(s => s.rating == 5).ToList();
                }
                else if (tab == 4)
                {
                    list = list.Where(s => s.rating == 4).ToList();
                }
                else if (tab == 3)
                {
                    list = list.Where(s => s.rating == 3).ToList();
                }
                else if (tab == 2)
                {
                    list = list.Where(s => s.rating == 2).ToList();
                }
                else if (tab == 1)
                {
                    list = list.Where(s => s.rating == 1).ToList();
                }
                else if (tab == 0)
                {
                    //do nothing
                }
                int limit = page * page_size;
                if (limit> list.Count)
                {
                    limit = list.Count;
                }
                for(int i= (page-1)*page_size; i<limit;i++)
                {
                    Item_Review item = new Item_Review();
                    item.user_avatar = list[i].user.avatar;
                    item.user_name = list[i].user.fullName;
                    item.rating = list[i].rating;
                    item.des = list[i].description;
                    if (product.options.Any())
                    {
                        item.option = list[i].option;
                    }
                    item.list_imgs = list[i].list_imgs;
                    item.date = list[i].date;
                    list_item.Add(item);
                }
                response.list_item = list_item;
                response.avg_rating = average_rating;
                response.five_stars = five_star_count;
                response.four_stars= four_star_count;
                response.three_stars = three_star_count;
                response.two_stars = two_star_count;
                response.one_stars = one_star_count;
                return JsonConvert.SerializeObject(response);
            }
        }
        public class Detail_review
        {
            public double avg_rating = -1;
            public int five_stars = -1;
            public int four_stars = -1;
            public int three_stars = -1;
            public int two_stars = -1;
            public int one_stars = -1;
            public List<Item_Review> list_item;
        }
        public class Item_Review
        {
            public string user_avatar;
            public string user_name;
            public double rating;
            public string des;
            public string option;
            public List<string> list_imgs;
            public DateTime date { get; set; }
        }
    }
}
