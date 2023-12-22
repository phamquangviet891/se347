using cs_se347.Model;
using Microsoft.AspNetCore.Mvc;
using static cs_se347.APIs.MyUser;

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
            Login_RES dto = Program.api_user.login(_DTO.email, _DTO.password);
            if (dto.user_id != -1)
            {
                return Ok(dto);
            }
            else
            {
                return BadRequest();
            }
        }


        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> register([FromBody] Register_DTO _DTO)
        {
            bool tmp = await Program.api_user.register( _DTO.fullName,  _DTO.phoneNumber, _DTO.email, _DTO.password);
            if (tmp)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("get-info")]
        public async Task<IActionResult> getInfo([FromQuery] long user_Id)
        {
            return Ok(Program.api_user.get_info(user_Id));
        }
    }
}
