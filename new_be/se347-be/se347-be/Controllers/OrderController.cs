using Microsoft.AspNetCore.Mvc;

namespace se347_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        public class Order_Add
        {
            public List<long> list_cart_item_id { get; set; }
            public long address_id { get;set; }
            public List<long> list_voucher { get; set; }
        } 
        [HttpPost]
        [Route("addOrder")]
        public async Task<IActionResult> addOrder(Order_Add dto)
        {
            bool tmp = await Program.api_order.addOrder(dto.list_cart_item_id, dto.address_id, dto.list_voucher);
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
        public async Task<IActionResult> getOrdersByUserId(long userId, int status, int page, int page_size)
        {
            return Ok(Program.api_order.getOrdersByUserId(userId,status,page,page_size));
        }

        [HttpPut]
        [Route("cancle_order")]
        public async Task<IActionResult> cancle_order(long order_id)
        {
            return Ok();
        }
    }
}
