using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cs_se347.Model
{
    [Table("tb_cartItem")]
    public class SqlCartItem
    {
        [Key]
        public long ID { get; set; }
        public SqlCart cart { get; set; }
        public SqlProduct product { get; set; }
        public int quantity { get; set; } = 1;
        public string option { get; set; }
        public DateTime create_at { get; set; } = DateTime.Now.ToUniversalTime();
        public DateTime modified_at { get; set; } = DateTime.Now.ToUniversalTime();
        public bool isDeleted { get; set; } = false;
        public Status_Cart_item status { get; set; } = Status_Cart_item.active;
        
    }
    public enum Status_Cart_item
    {
        active,
        order,
    }
}
