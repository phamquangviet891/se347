using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace se347_be.Model
{
    [Table("tb_review")]
    public class SqlReview
    {
        [Key]
        public long ID { get; set; }
        public SqlUser user { get; set; }
        public SqlProduct product { get; set; }
        public SqlCartItem cart_item { get; set; }
        public double rating { get; set; } = 0;
        public string option { get;set; }
        public string? description { get; set; } = "";
        public List<string>? list_imgs { get; set; }
        public DateTime date { get; set; }
    }
}
