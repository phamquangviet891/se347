using cs_se347.Model;
using Microsoft.AspNetCore.Mvc;

namespace cs_se347.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class CategoryController:ControllerBase
    {
        [HttpGet]
        [Route("/getListCategories")]
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
