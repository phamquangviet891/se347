using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace se347_be.Model
{
    [Table("tb_message")]
    public class SqlMessage
    {

        [Key]
        public long ID { get; set; }
        public bool type { get;set; } //true là user nhắn, false là shop nhắn
        public DateTime time { get; set; } = DateTime.UtcNow;
        public string message { get; set; }
        public SqlConversation conversation { get; set; }
    }

    public class Message_DTO
    {
        public bool type { get; set; } //true là user nhắn, false là shop nhắn
        public DateTime time { get; set; }
        public string message { get; set; }
    }
}
