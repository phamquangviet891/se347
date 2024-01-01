 using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace se347_be.Model
{
    [Table("tb_shop")]
    public class SqlShop
    {
        [Key]
        public long ID { get; set; }
        public string name { get; set; }
        public string logo { get; set; }
        public double rating { get; set; } = 4.7;
        public long so_nguoi_danh_gia { get; set; }
        public bool isDeleted { get; set; } = false;
        public List<SqlVoucher>? vouchers { get; set; }
        public List<SqlProduct>? products { get; set; }
        public List<SqlNoti>? notis { get; set; }
        public List<SqlConversation>? conversations { get; set; }
    }

    public class Shop
    {
        public long ID { get; set; }
        public string name { get; set; }
    }
    public class Detail_Shop
    {
        public long shop_id { get; set; }
        public string name { get; set; }
        public string logo { get; set; }
        public double rating { get; set; } = 4.7;
        public long so_nguoi_danh_gia { get; set; }
        public int tong_san_pham { get;set; }
    }
    public class Shop_Short
    {
        public long shop_id { get; set; }
        public string name { get; set; }
        public string logo { get; set; }
    }
}
