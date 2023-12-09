using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cs_se347.Model
{
    [Table("tb_user")]
    public class SqlUser
    {
        [Key]
        public long ID { get; set; }
        public string fullName { get; set; } = "";
        public string email { get; set; } = "";
        public string phoneNumber { get; set; } = "";
        public string password { get; set; } = "";
        public string avatar { get; set; } = "";
    }
    public class Login_DTO
    {
        public string email { get; set; } = "";
        public string password { get; set; } = "";
    }
}
