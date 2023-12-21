using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cs_se347.Model
{
    [Table("tb_shop")]
    public class SqlShop
    {
        [Key]
        public long ID { get; set; }
        public string name { get; set; }
        public string logo { get; set; }
        public double rating { get; set; } = 4.7;
        public string danh_gia { get; set; }
        public bool isDeleted { get; set; } = false;
        public List<SqlProduct>? products { get; set; }

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
        public string danh_gia { get; set; }
        public int tong_san_pham { get; set; }
    }
    public class Shop_Short
    {
        public long shop_id { get; set; }
        public string name { get; set; }
        public string logo { get; set; }
    }
}
