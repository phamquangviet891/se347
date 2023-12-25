using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cs_se347.Model
{
    [Table("tb_order")]
    public class SqlOrder
    {
        [Key]
        public long ID { get; set; }
        public int status { get; set; } = 0;
        //-1: tat ca
        //0 : cho thanh toan
        //1: dang xu ly
        //2: dang van chuyen
        //3: da giao
        //4: da huy

        public SqlUser? user { get; set; }
        public string? address { get; set; } //address serialize 
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
