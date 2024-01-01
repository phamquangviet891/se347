using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace se347_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        [HttpGet]
        [Route("conversation")]
        public IActionResult get_conversation (long user_id=1, long shop_id = 1, int limit=10)
        {
            return Ok(Program.api_chat.get_conversation(user_id,shop_id,limit));
        }

        [HttpPost]
        [Route("customer/createMessage")]
        public async Task<IActionResult> customer_new_message(long user_id=1, long shop_id = 1, string message="test")
        {
            bool tmp = await Program.api_chat.customer_new_message(user_id,shop_id, message);
            if (tmp)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("seller/createMessage")]
        public async Task<IActionResult> seller_new_message(long user_id=1, long shop_id = 1, string message = "test")
        {
            bool tmp = await Program.api_chat.seller_new_message(user_id, shop_id, message);
            if (tmp)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
        [HttpGet]
        [Route("seller/list_conversations")]
        public IActionResult get_list_conversations(long shop_id = 1, int limit=10)
        {
            return Ok(Program.api_chat.get_list_conversations(shop_id,limit));
        }


        [HttpGet]
        [Route("seller/conversation")]
        public async Task<IActionResult> get_conversation (long conversation_id, int limit=10)
        {
            return Ok(await Program.api_chat.get_conversation(conversation_id,limit));
        }
    }
}
