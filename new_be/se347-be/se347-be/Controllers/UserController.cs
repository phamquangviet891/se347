using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using se347_be.Model;

namespace se347_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public class Login_RES
        {
            public long user_id { get; set; }
            public string username { get; set; }
        }
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> login([FromBody] Login_DTO _DTO)
        {
            Login_RES dto = Program.api_user.login(_DTO.userName, _DTO.password);
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
            bool tmp = await Program.api_user.register(_DTO.userName, _DTO.email, _DTO.phoneNumber, _DTO.password);
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
        public class Update_Info
        {
            public long user_id { get; set; }
            public string fullName { get; set; }
            public string userName { get; set; }
            public string email { get; set; }
            public string phoneNumber { get; set; }
        }
        [HttpPost]
        [Route("update-info")]
        public async Task<IActionResult> updateInfo([FromForm] Update_Info _DTO, [FromForm] List<IFormFile> form_files)
        {
            if (_DTO.user_id == 1) { return BadRequest("Khong duoc sua id nay"); }
            bool tmp = await Program.api_user.update_info(_DTO.user_id, _DTO.fullName, _DTO.userName, _DTO.email,_DTO.phoneNumber, form_files);
            if (tmp)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
