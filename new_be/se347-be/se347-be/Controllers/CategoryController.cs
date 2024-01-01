using Microsoft.AspNetCore.Mvc;
using se347_be.Model;

namespace se347_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        [HttpGet]
        [Route("getListCategories")]
        public async Task<IActionResult> getListCategories()
        {
            List<SqlCategory> categories = await Program.api_category.getListCategories();
            if (categories == null)
            {
                return BadRequest();
            }
            else
            {
                return Ok(categories);
            }
        }

    }
}
