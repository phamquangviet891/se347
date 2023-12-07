using cs_se347.Model;
using Microsoft.AspNetCore.Mvc;

namespace cs_se347.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class OrderController:ControllerBase
    {
        [HttpPost]
        [Route("/addOrder")]
        public async Task<IActionResult> addOrder( long cartId)
        {
            bool tmp = await Program.api_order.addOrder(cartId);
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
        [Route("/getOrdersByUserId")]
        public async Task<IActionResult> getOrdersByUserId(long userId)
        {
            return Ok(Program.api_order.getOrdersByUserId(userId));
        }
    }
}
