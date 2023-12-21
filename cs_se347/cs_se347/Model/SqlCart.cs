using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cs_se347.Model
{
    [Table("tb_cart")]
    public class SqlCart
    {
        [Key]
        public long ID { get; set; }
        public SqlShop shop { get; set; }
        public SqlUser user { get; set; }
        public bool isDeleted { get; set; } = false;
        public DateTime create_at { get; set; } = DateTime.Now.ToUniversalTime();
        public DateTime? modified_at { get; set; } = DateTime.Now.ToUniversalTime();
        public List<SqlCartItem> cart_items { get; set; }
    }
    public class Carts_DTO
    {
        public long cartId { get; set; }
        public long productId { get; set; }
        public string productName { get; set; }
        public long productSalePrice { get; set; }
        public string productImage { get; set; }
        public string giao_thu { get; set; }
        public int quantity { get; set; }
        public string option { get; set; }
        public long total { get; set; }
    }

}
