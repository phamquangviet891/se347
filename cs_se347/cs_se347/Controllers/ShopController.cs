using cs_se347.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace cs_se347.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopController : ControllerBase
    {
        //[HttpGet]
        //[Route("getShop")]
        //public async Task<SqlShop> getShopbyId(long shopId)
        //{

        //    using(DataContext context = new DataContext())
        //    {
        //        SqlShop shop = context.shops.Where(s=>s.ID == shopId).FirstOrDefault();
        //        if (shop == null)
        //        {

        //        }
        //    }
        //}
    }
}
