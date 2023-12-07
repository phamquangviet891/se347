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
        public string phoneNumber { get; set; } = "";
        public string password { get; set; } = "";
    }
}
