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
        public class Order_Response
        {
            public long order_id { get; set; }
        }
        [HttpPost]
        [Route("addOrder")]
        public async Task<IActionResult> addOrder(Order_Add dto)
        {
            long tmp = await Program.api_order.addOrder(dto.list_cart_item_id, dto.address_id);
            if (tmp != -1)
            {
                Order_Response response = new Order_Response();
                response.order_id = tmp;
                return Ok(response);
            }
            else
            {
                return BadRequest();
            }
        }
        [HttpGet]
        [Route("getOrdersByUserId")]
        public async Task<IActionResult> getOrdersByUserId(long userId,int status=-1)
        {
            return Ok(Program.api_order.getOrdersByUserId(userId,status));
        }

        [HttpGet]
        [Route("getOrderDetail")]
        public async Task<IActionResult> get_detail_order(long order_id)
        {
            return Ok(Program.api_order.get_detail_order(order_id));

        }
    }
}
