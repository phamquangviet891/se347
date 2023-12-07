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
        public long cartID { get; set; }
        public SqlUser user { get; set; }
    }
    public enum Status_Order
    {
        cho_thanh_toan,
        dang_xu_ly,
        dang_van_chuyen,
        da_giao,
        da_huy
    }
    public class Res_My_Order
    {
        public long Id { get; set; }
        public string shopName { get; set; }
        public int total { get; set; }
        public int quantity { get; set; }
        public string status { get; set; }
    }
}
