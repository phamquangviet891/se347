using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.Eventing.Reader;

namespace se347_be.Model
{
    [Table("tb_voucher")]
    public class SqlVoucher     //voucher này là voucher của shop, muốn lưu voucher của delivery thì tự tạo model khác, tương tự taka voucher
    {
        [Key]
        public long ID { get; set; }
        public string title { get; set; } = "";
        public DateTime public_date { get; set; } = DateTime.UtcNow;
        public DateTime expire_date { get; set; } = DateTime.UtcNow;
        public int discountAmount { get; set; } = 0;
        public long minimum_order_price { get; set; } = 0;
        public string image { get; set; } = "";
        public SqlShop shop { get; set; }
        public bool type { get; set; } = true;
        //true là cả shop, false là 1 vài sản phẩm
        public List<string>? list_product_applied { get; set; }
        public List<string>? list_user_applied { get; set; }
        public bool isDeleted { get; set; } = false;
    }
    public class Product_Voucher
    {
        public long voucher_ID { get; set; }
        public string title { get; set; }
        public DateTime expire_date { get; set; }
        public string image { get; set; }
        public long minimum_order_price { get; set; }
        public int discountAmount { get; set; } = 0;

    }
}
