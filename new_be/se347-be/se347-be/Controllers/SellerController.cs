using Microsoft.AspNetCore.Mvc;
using se347_be.Model;

namespace se347_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
       /* [HttpGet]
        [Route("switch_to_seller")]
        public IActionResult switch_to_seller(long userId)
        {
            return Ok(Program.api_seller.switch_to_seller(userId));
        }*/
        [HttpGet]
        [Route("all_Shop")]
        public IActionResult get_all_shop(long userId)
        {
            return Ok(Program.api_seller.getShopList(userId));
        }
        public class Seller_Product
        {

        }
        [HttpGet]
        [Route("my_Products")]
        public IActionResult get_My_Products(long shop_id, int limit)
        {
            return Ok(Program.api_seller.get_My_Products(shop_id, limit));
        }
        [HttpGet]
        [Route("getlist_order_status")]
        public IActionResult getlist_order_status()
        {
            return Ok(Program.api_order.getlist_order_status());
        }
        [HttpPut]
        [Route("update_Order_status")]
        public async Task<IActionResult> update_Order_status(long order_id, string order_status)
        {
            bool tmp = await Program.api_order.update_Order_status(order_id, order_status);
            if (tmp) { return Ok(); }
            else {  return BadRequest(); }
        }
        [HttpPost]
        [Route("addProduct")]
        public async Task<IActionResult> createNew(long shopId, long categoryId, Create_Product dto)
        {
            bool tmp = await Program.api_product.createNew(shopId, categoryId, dto.productName,dto.productPrice, dto.productListImage, dto.productListImage,  dto.options,  dto.description);
            if (tmp)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
