using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace se347_be.Model
{
    [Table("tb_noti")]
    public class SqlNoti
    {
        
        [Key]
        public long noti_ID { get; set; }
        public string title { get; set; }
        public string image { get; set; }
        public DateTime time_Sent { get; set; }= DateTime.UtcNow;
        public string description { get; set; }
        public bool isSeen { get; set; } = false;
        public DateTime time_seen { get; set; } = DateTime.UtcNow.AddDays(-1);
        public string? id_routing { get; set; } // id của order hoặc là product gì đấy, nếu muốn chuyển trang sang product detail thì phải có id 
        public string? type_routing { get; set; }// type là "product" hay là "order"

        public bool isDeleted { get; set; }= false;
        public bool type_receiver { get; set; } // true là của buyer, false là của shop/seller
        public SqlUser? user { get; set; }
        public SqlShop? shop { get; set; }
    }
}
