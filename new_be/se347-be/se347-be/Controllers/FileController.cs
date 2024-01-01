using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace se347_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        [HttpPost]
        [Route("upload-image")]
        public async Task<IActionResult> uploadImage(IFormFile file)
        {
            return Ok( await Program.api_cloudinary.uploadImage(file));
        }
    }
}
