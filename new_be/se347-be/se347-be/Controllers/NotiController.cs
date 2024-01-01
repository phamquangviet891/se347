using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace se347_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotiController : ControllerBase
    {
        [HttpGet]
        [Route("getListNoti")]
        public IActionResult getListNoti(long user_id=1, int limit =10)
        {
            return Ok(Program.api_noti.GetListNoti_buyer(user_id, limit ));
        }

        [HttpPost]
        [Route("test/createNoti")]
        public async Task<IActionResult> createNotiAsync(bool type_receiver = true, long receiver_id = 1, string title = "test", string image = "test", string description = "test", string? id_routing="", string? type_routing="")
        {
            return Ok(await Program.api_noti.createNotiAsync(type_receiver, receiver_id, title, image, description, id_routing, type_routing));
        }

        [HttpPut]
        [Route("set_is_seen")]
        public async Task<IActionResult> set_is_seen(long noti_ID)
        {
            return Ok(await Program.api_noti.set_is_seen(noti_ID));
        }

        [HttpDelete]
        [Route("deleteOne")]
        public async Task<IActionResult> deleteOne(long noti_ID)
        {
            return Ok(await Program.api_noti.deleteOne(noti_ID));
        }
    }
}
