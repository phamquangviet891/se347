using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cs_se347.Model
{
    [Table("tb_order")]
    public class SqlOrder
    {
        [Key]
        public long ID { get; set; }
        public Status_Order status { get; set; } = Status_Order.cho_thanh_toan;
        public SqlUser? user { get; set; }
        public SqlAddress? address { get; set; } //address serialize 
        public DateTime time { get; set; } = DateTime.UtcNow;
        public List<SqlOrderItem>? items { get; set; }   

    }
    public enum Status_Order
    {
        cho_thanh_toan,
        dang_xu_ly,
        dang_van_chuyen,
        da_giao,
        da_huy
    }
}
