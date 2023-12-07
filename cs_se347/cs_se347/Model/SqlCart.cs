﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cs_se347.Model
{
    [Table("tb_cart")]
    public class SqlCart
    {
        [Key]
        public long ID { get; set; }
        public SqlProduct product { get; set; }
        public SqlUser user { get; set; }
        public int quantity { get; set; } = 1;
        public string option { get; set; }
    }
    public class Res_CartItem_DTO
    {
        public long cartId { get; set; }
        public long productId { get; set; }
        public string productName { get; set; }
        public int productSalePrice { get; set; }
        public string productImage { get; set; }
        public string giao_thu { get; set; }
        public int quantity { get; set; }
        public string option { get; set; }
        public int total { get; set; }
    }
    public class Req_cart
    {
        public long productId{ get; set; }
        public long userId { get; set; }
        public string option { get; set; }

    }
}