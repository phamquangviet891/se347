using cs_se347.Model;
using Microsoft.AspNetCore.Mvc;

namespace cs_se347.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class CartController:ControllerBase
    {
        [HttpGet]
        [Route("/getCartByUserId")]
        public async Task<IActionResult> getCartsByUserId(long userId)
        {
            return Ok(Program.api_cart.getCartsByUserId(userId));
        }

        [HttpPost]
        [Route("addToCart")]
        public async Task<IActionResult> addToCart(Req_cart _DTO)
        {
            bool tmp = await Program.api_cart.addToCart(_DTO.userId, _DTO.productId, _DTO.option);
            if (tmp)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut]
        [Route("increaseCart")]
        public async Task<IActionResult> increaseCart(long cartId)
        {
            bool tmp = await Program.api_cart.increaseCart(cartId);
            if(tmp)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
        [HttpPut]
        [Route("decreaseCart")]
        public async Task<IActionResult> decreaseCart(long cartId)
        {
            bool tmp = await Program.api_cart.decreaseCart(cartId);
            if (tmp)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
        [HttpDelete]
        [Route("removeCart")]
        public async Task<IActionResult> removeCart(long cartId)
        {
            bool tmp = await Program.api_cart.removeCart(cartId);
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
