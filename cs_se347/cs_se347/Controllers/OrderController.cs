using cs_se347.Model;
using Microsoft.AspNetCore.Mvc;

namespace cs_se347.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {

        public class Order_Add
        {
            public List<long> list_cart_item_id { get; set; }
            public long address_id { get; set; }
        }
        [HttpPost]
        [Route("addOrder")]
        public async Task<IActionResult> addOrder(Order_Add dto)
        {
            bool tmp = await Program.api_order.addOrder(dto.list_cart_item_id, dto.address_id);
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
        [Route("getOrdersByUserId")]
        public async Task<IActionResult> getOrdersByUserId(long userId, int status=-1, int page=1, int page_size=10)
        {
            return Ok(Program.api_order.getOrdersByUserId(userId, status, page, page_size));
        }

    }
}
