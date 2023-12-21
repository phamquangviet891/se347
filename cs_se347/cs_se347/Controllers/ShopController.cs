using cs_se347.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cs_se347.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopController : ControllerBase
    {
        
        [HttpGet]
        [Route("info")]
        public IActionResult get_info(long shop_id)
        {
            return Ok(Program.api_shop.getShop(shop_id));
        }
    }
}
