using cs_se347.Model;
using Microsoft.AspNetCore.Mvc;

namespace cs_se347.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController:ControllerBase
    {
        [HttpGet]
        [Route("/getListProductHomepage")]
        public async Task<IActionResult> getListProductHomepage()
        {
            return Ok(await Program.api_product.getListProductHomepage());
        }
        [HttpGet]
        [Route("/getProductDetail")]
        public async Task<IActionResult> getProductDetail(long product_id)
        {
            Detail_Product product = await Program.api_product.getProductDetail(product_id);
            if (product.productName == "")
            {
                return BadRequest();
            }
            else
            {
                return Ok(product);
            }

        }

        //[HttpPost]
        //[Route("createProduct")]
        //public async Task<IActionResult> createNew(long shopId,long categoryId, Create_Product dto)
        //{
        //    bool tmp = await Program.api_product.createNew(shopId,categoryId, dto.productName,dto.productImage,dto.productPrice, dto.productListImage,dto.discount,dto.options,dto.detail,dto.description);
        //    if (tmp)
        //    {
        //        return Ok();
        //    }
        //    else
        //    {
        //        return BadRequest();
        //    }
        //}

        [HttpGet]
        [Route("/getListByCategoryId")]
        public async Task<IActionResult> getProductsByCategoryId(long categoryId, int limit)
        {
            List<HomePage_Product> products = await Program.api_product.getProductsByCategoryId(categoryId, limit);
            if (products == null)
            {
                return BadRequest();
            }
            else
            {
                return Ok(products);
            }
        }
        [HttpGet]
        [Route("/getListByShopId")]
        public async Task<IActionResult> getProductsByShopId(long shopId)
        {
            List<HomePage_Product> products = await Program.api_product.getProductsByShopId(shopId);
            if (products == null)
            {
                return BadRequest();
            }
            else
            {
                return Ok(products);
            }
        }
    }
}
