using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace se347_be.Model
{
    [Table("tb_product")]
    public class SqlProduct
    {
        [Key]
        public long ID { get; set; }
        public string productName { get; set; } = "";
        public long productPrice { get; set; } = 0;
        public long productSalePrice { get; set; } = 0;
        public int discount { get; set; } = 0;
        public int sold { get; set; } = 0;
        public float rating { get; set; } = 0;
        public string productImage { get; set; } = "";
        public List<string> productListImage { get; set; } = new List<string>();
        public List<string> options { get; set; } = new List<string>();
        public string description { get; set; } = "";
        public List<string> detail { get; set; } = new List<string>();
        public string brand { get; set; } = "";
        public SqlShop shop { get; set; }
        public SqlCategory category { get; set; }
        public int inventory { get; set; } = 100;
        public List<SqlReview>  reviews { get; set; }   
        public bool isDeleted { get; set; } = false;
        public int status { get;set; }
        public List<string>? productVideos { get; set; } 
    }
    public class HomePage_Product
    {
        public long ID { get; set; }
        public string category { get; set; }
        public string productName { get; set; }
        public string productImage { get; set; }
        public int discount { get; set; }
        public long productPrice { get; set; }
        public long productSalePrice { get; set; }
        public int sold { get; set; }
        public float rating { get; set; }
        public string giao_thu { get; set; }
        public string slug { get; set; }

    }
    public class Create_Product
    {
        public string productName { get; set; }
        public int discount { get; set; }
        public long productPrice { get; set; }
        public string productImage { get; set; }
        public List<string> productListImage { get; set; }
        public List<string> options { get; set; }
        public List<string> detail { get; set; }
        public string description { get; set; } = "";

    }
    public class Detail_Product
    {
        public long ID { get; set; }
        public long category_id { get; set; }
        public string productName { get; set; } = "";
        public long productPrice { get; set; } = 0;
        public long productSalePrice { get; set; } = 0;
        public int discount { get; set; } = 0;
        public int sold { get; set; } = 0;
        public float rating { get; set; } = 0;
        public string productImage { get; set; } = "";
        public List<string> productListImage { get; set; } = new List<string>();
        public List<string> options { get; set; }
        public string description { get; set; }
        public List<string> detail { get; set; } = new List<string>();
        public string brand { get; set; }
        public int inventory { get; set; }
        public long shopId { get; set; }
    }
}
