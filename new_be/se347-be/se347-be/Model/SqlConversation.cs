using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace se347_be.Model
{
    [Table("tb_conversation")]
    public class SqlConversation
    {
        [Key]
        public long ID { get; set; }
        public SqlShop shop { get; set; }   
        public SqlUser user { get; set; }
        public List<SqlMessage>? messages { get; set; }
        public bool is_seen { get; set; }
        public DateTime last_time { get;set; }
        //public DateTime seen_time { get; set; }
    }

    public class Conversation_DTO
    {
        public string logo { get;set; }
        public string name { get; set; }
        public List<Message_DTO>? messages { get; set; }
    }
    public class Item_Conversation_DTO
    {
        public long conversation_id { get; set; }
        public string customer_avatar { get; set; }
        public string customer_name { get; set;}
        public string customer_phone { get; set; }
        public bool is_seen { get; set; }
        public DateTime last_time { get; set; } 
    }
}
