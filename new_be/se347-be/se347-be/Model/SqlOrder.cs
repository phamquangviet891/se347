using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace se347_be.Model
{
    [Table("tb_order")]
    public class SqlOrder
    {
        [Key]
        public long ID { get; set; }
        public Status_Order status { get; set; } = Status_Order.cho_thanh_toan;
        public SqlUser user { get; set; }
        public SqlShop shop { get; set; }
        public List<string> list_cart_item { get; set; } // serialize
        public string address { get; set; } //address serialize 
        public string payment_id { get; set; } = "";
        public DateTime time { get; set; } = DateTime.UtcNow;
        public List<string>? vouchers { get; set; }//serialize
    }
    public enum Status_Order
    {
        cho_thanh_toan,
        dang_xu_ly,
        dang_van_chuyen,
        da_giao,
        da_huy
    }
    
    public class Order_DTO
    {
        public long Id { get; set; }
        public string shopName { get; set; }  
        public long total { get; set; }
        public int quantity { get; set; }
        public string status { get; set; }
    }
}
