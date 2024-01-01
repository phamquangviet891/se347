using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using se347_be.Model;
using Serilog;
using System.Linq;

namespace se347_be.APIs
{
    public class MyNoti
    {
        public MyNoti() { }
        public class NotiDTOResponse
        {
            public long noti_ID { get; set; }
            public string title { get; set; }
            public string image { get; set; }
            public DateTime time_Sent { get; set; } = DateTime.UtcNow;
            public string description { get; set; }
            public bool isSeen { get; set; }
            public DateTime time_seen { get; set; }
            public string? id_routing { get; set; } // id của order hoặc là product gì đấy, nếu muốn chuyển trang sang product detail thì phải có id 
            public string? type_routing { get; set; }// type là "product" hay là "order"
        }

        //các type của noti: successful delivery
        // rating notification
        // refund confirmation
        public static readonly string TITLE_SUCCESS_DELIVERY = "Successful delivery";
        public static readonly string TITLE_RATING_NOTIFICATION = "Rating notification";
        public static readonly string TITLE_REFUND_CONFIRMATION = "Refund_Confirmation";
        public string get_description_success_delivery(long order_id)
        {
            return "Your order " + order_id.ToString() + " has successfully delivered to you.";
        }
        public string get_description_refund_confirmation(long order_id)
        {
            return "Your order " + order_id.ToString() + " has been approved.\nClick for detail.";
        }
        public string get_description_rating_notification(long order_id)
        {
            return "You left a feedback.";
        }
        public List<NotiDTOResponse> GetListNoti_buyer(long user_id, int limit)
        {
            List<NotiDTOResponse> response = new List<NotiDTOResponse>();
            using (DataContext context = new DataContext())
            {
                SqlUser? user = context.users.Where(s =>s.ID == user_id).Include(s => s.notis).FirstOrDefault();
                if (user == null)
                {
                    return response;
                }
                
                List<SqlNoti> notis = user.notis.Where(s=>s.isDeleted==false).ToList();
                if (limit > notis.Count)
                {
                    limit = notis.Count;
                }
                if (notis.Count == 0) {
                    return response;
                }
                for (int i = 0; i < limit; i++)
                {
                    NotiDTOResponse tmp = new NotiDTOResponse();
                    tmp.noti_ID = notis[i].noti_ID;
                    tmp.title = notis[i].title;
                    tmp.image = notis[i].image;
                    tmp.time_Sent = notis[i].time_Sent.AddHours(7);
                    tmp.description = notis[i].description;
                    tmp.isSeen = notis[i].isSeen;
                    tmp.time_seen = notis[i].time_seen.AddHours(7);
                    tmp.id_routing = notis[i].id_routing;
                    tmp.type_routing = notis[i].type_routing;
                    response.Add(tmp);
                }
                response = response.OrderBy(s => s.time_Sent).Take(limit).ToList();
                return response;
            }
        }

        public async Task<bool> set_is_seen (long noti_ID)
        {
            using(DataContext context = new DataContext())
            {
                SqlNoti? noti = context.notis.Where(s=>s.noti_ID== noti_ID).FirstOrDefault();
                if(noti==null)
                {
                    return false;
                }
                noti.isSeen = true;
                noti.time_seen = DateTime.UtcNow;
                await context.SaveChangesAsync();
                return true;
            }
        }
        public async Task<bool> deleteOne(long noti_ID)
        {
            using (DataContext context = new DataContext())
            {
                SqlNoti? noti = context.notis.Where(s => s.noti_ID == noti_ID).FirstOrDefault();
                if (noti == null)
                {
                    return false;
                }
                noti.isDeleted = true;
                await context.SaveChangesAsync();
                return true;
            }
        }
        public async Task<bool> createNotiAsync(bool type_receiver, long receiver_id, string title, string image, string description, string? id_routing, string? type_routing)
        {
            if (string.IsNullOrEmpty(title) || string.IsNullOrEmpty(image) || string.IsNullOrEmpty(description))
            {
                return false;
            }

            using (DataContext context = new DataContext())
            {
                SqlNoti noti = new SqlNoti();
                noti.type_receiver = type_receiver;
                noti.title = title;
                noti.image = image;
                noti.description = description;
                noti.id_routing = id_routing;
                noti.type_routing = type_routing;

                SqlUser? user = new SqlUser();
                SqlShop? shop = new SqlShop();
                if (type_receiver)
                {// true la buyer, false la shop
                    user = context.users.Where(s => s.ID == receiver_id).FirstOrDefault();
                    if (user == null)
                    {
                        return false;
                    }
                }
                else
                {
                    shop = context.shops.Where(s => s.ID == receiver_id).FirstOrDefault();
                    if (shop == null)
                    {
                        return false;
                    }
                    noti.shop = shop;
                }
                noti.user = user;
                if (user.notis!= null && user.notis.Any())
                {
                    user.notis.Insert(0, noti);
                }
                else
                {
                    List<SqlNoti> _notis = new List<SqlNoti>();
                    _notis.Insert(0,noti);
                    user.notis = _notis;

                }
                context.notis.Add(noti);
                await context.SaveChangesAsync();
                return true;
            }
        }

        public async Task<bool> test_noti_rating(long order_id)
        {

            return false ;
        }
    }  
}
