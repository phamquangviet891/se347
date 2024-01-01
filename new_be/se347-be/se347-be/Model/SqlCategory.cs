using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace se347_be.Model
{
    [Table("tb_category")]

    public class SqlCategory
    {
        [Key]
        public long ID { get; set; }
        public string title { get; set; }
        public string image { get; set; }
        public string slug { get; set; }
        public List<SqlProduct> products { get; set; }
    }
}
