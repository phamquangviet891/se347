using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cs_se347.Model
{
    [Table("tb_user")]
    public class SqlUser
    {
        [Key]
        public long ID { get; set; } = DataContext.GenerateRandomValue();
        public string fullName { get; set; } = "";
        public string email { get; set; } = "";
        public string phoneNumber { get; set; } = "";
        public string password { get; set; } = "";
        public string avatar { get; set; } = "";
        public List<SqlOrder> orders { get; set; }
    }
    public class Login_DTO
    {
        public string email { get; set; } = "";

        public string password { get; set; } = "";
    }
    public class Register_DTO
    {
        public string fullName { get; set; }
        public string email { get; set; } = "";
        public string phoneNumber { get; set; } = "";
        public string password { get; set; } = "";
    }
    public class Info_DTO
    {
        public string fullName { get; set; }
        public string email { get; set; }
        public string phoneNumber { get; set; }
        public string avatar { get; set; }
    }
}
