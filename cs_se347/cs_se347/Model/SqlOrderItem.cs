using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cs_se347.Model
{
    [Table("tb_orderItem")]
    public class SqlOrderItem
    {
        [Key]
        public long ID { get; set; }
        public SqlShop shop { get; set; }
        public SqlOrder order { get; set; }
        public List<SqlCartItem>? list_cart_item { get; set; }// serialize


    }
}
