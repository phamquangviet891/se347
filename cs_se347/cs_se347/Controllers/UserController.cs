using cs_se347.Model;
using Microsoft.AspNetCore.Mvc;

namespace cs_se347.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost]
        [Route("/login")]
        public IActionResult login(Login_DTO _DTO)
        {
            return Ok(Program.api_user.login(_DTO.email, _DTO.password));
        }
    }
}
