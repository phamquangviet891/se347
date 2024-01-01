using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using se347_be.Model;
using static se347_be.APIs.MyProduct;

namespace se347_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        //[HttpGet]
        //[Route("getListProductHomepage")]
        //public async Task<IActionResult> getListProductHomepage()
        //{
        //    return Ok(await Program.api_product.getListProductHomepage());
        //}

        public class getProductDetail_Res
        {
            public Detail_Product product = new Detail_Product();
            public Detail_Shop shop = new Detail_Shop();
            public List<Product_Voucher> vouchers = new List<Product_Voucher>();
        }

        [HttpGet]
        [Route("detail_page")]
        public IActionResult detail_page( long productId)
        {
            return Ok(Program.api_product.getProductDetail(productId));
        }
        

        //[HttpGet]
        //[Route("getListByCategoryId")]
        //public async Task<IActionResult> getProductsByCategoryId(long categoryId)
        //{
        //    List<HomePage_Product> products = await Program.api_product.getProductsByCategoryId(categoryId);
        //    if (products == null)
        //    {
        //        return BadRequest();
        //    }
        //    else
        //    {
        //        return Ok(products);
        //    }
        //}

        //[HttpGet]
        //[Route("getListByShopId")]
        //public async Task<IActionResult> getProductsByShopId(long shopId, int page)
        //{
        //    List<HomePage_Product> products = await Program.api_product.getProductsByShopId(shopId, page);
        //    if (products == null)
        //    {
        //        return BadRequest();
        //    }
        //    else
        //    {
        //        return Ok(products);
        //    }
        //}

        [HttpGet]

        [Route("search")]
        public IActionResult search(string key, int page)
        {
            return Ok(Program.api_product.search(key,page));
        }

        public class Filter_DTO
        {

        }

        //[HttpGet]
        //[Route("filter")]
        //public IActionResult filter()
        //{
        //    return Ok();
        //}

        [HttpGet]
        [Route("daily_product")]
        public IActionResult daily_product() {
            return Ok(Program.api_product.random_product(18));
        }

        [HttpGet]
        [Route("byCategory")]
        public IActionResult get_by_category(long category_id, int limit) {
            return Ok(Program.api_product.get_by_category(category_id,limit));
        }

        //[HttpGet]
        //[Route("filter")]
        //public IActionResult filter()
        //{
        //    return Ok();
        //}

    }
}
