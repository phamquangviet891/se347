using Microsoft.AspNetCore.Mvc;
using se347_be.Model;

namespace se347_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopController : ControllerBase
    {
        
        [HttpGet]
        [Route("view_products")]
        public IActionResult view_products(long shop_id, int page)
        {
            return Ok(Program.api_shop.view_products(shop_id, page));
        }
        [HttpGet]
        [Route("view_categories")]
        public IActionResult view_categories(long shop_id)
        {
            return Ok(Program.api_shop.view_categories(shop_id));
        }
        [HttpGet]
        [Route("info")]
        public IActionResult get_info(long shop_id)
        {
            return Ok(Program.api_shop.getShop(shop_id));
        }
        
       
    }
   
}
