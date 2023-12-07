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
        public double rating { get; set; }= 4.7;
        public string danh_gia { get; set; }

    }
}
