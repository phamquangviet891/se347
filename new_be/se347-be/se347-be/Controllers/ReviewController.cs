using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using se347_be.Model;

namespace se347_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController: ControllerBase   
    {
        public class Review_DTO
        {
            public long userId { get; set; }
            public long cart_item_id { get; set; }
            public double rating { get; set; }
            public string? description { get; set; }
        }
        [HttpPost]
        [Route("createNew")]
        public async Task<IActionResult> createNew([FromForm] Review_DTO _DTO, [FromForm] List<IFormFile> form_files)
        {
            bool tmp = await Program.api_review.createNew(_DTO.userId, _DTO.cart_item_id, _DTO.rating, _DTO.description, form_files);
            if (tmp)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet]
        [Route("getbyProduct")]
        public IActionResult getByProduct(long productId,int rating, int page, int page_size)
        {
            string data = Program.api_review.getByproduct(productId, rating, page, page_size);
            return Ok(data);
        }
    }
}
