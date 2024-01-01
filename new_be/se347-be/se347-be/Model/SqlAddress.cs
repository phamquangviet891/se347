using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace se347_be.Model
{
    [Table("tb_address")]
    public class SqlAddress
    {
        [Key]
        public long ID { get; set; }
        [JsonIgnore]
        public SqlUser user { get; set; }
        public string ho_va_ten { get; set; }
        //public string cong_ty { get; set; }
        public string so_dien_thoai { get; set; }
        public string tinh_thanh_pho { get; set; }
        public string quan_huyen { get; set; }
        public string phuong_xa { get; set; }
        public string dia_chi_detail { get; set; }
        //public bool loai_dia_chi { get; set; }
        //true => nha rieng, chung cu
        //false => co quan, cong ty
        public bool dia_chi_mac_dinh { get; set; } = false;
        public bool isDeleted { get; set; } = false;
    }
    public class Address_DTO
    {
        public string ho_va_ten { get; set; }
       // public string cong_ty { get; set; }
        public string so_dien_thoai { get; set; }
        public string tinh_thanh_pho { get; set; }
        public string quan_huyen { get; set; }
        public string phuong_xa { get; set; }
        public string dia_chi_detail { get; set; }
        //public bool loai_dia_chi { get; set; }
        //public bool dia_chi_mac_dinh { get; set; } = false;
    }

    public class Address_Short
    {
        public long address_ID { get; set; }
        public string ho_va_ten { get; set; }
        public string so_dien_thoai { get; set; }
        public string dia_chi_full { get; set; }
        public bool dia_chi_mac_dinh { get; set; }
    }
}
