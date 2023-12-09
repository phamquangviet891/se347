using cs_se347.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace cs_se347.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        [HttpPost]
        [Route("createNew")]
        public async Task<IActionResult> createNew(long userId, Req_Address_create _dto)
        {
            bool tmp = await Program.api_address.createNew(userId, _dto);
            if (tmp) { 
            return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("getByUserId")]
        public async Task<IActionResult> getByUserId(long userId)
        {
            return Ok( Program.api_address.getByUserId(userId));
        }

        [HttpPut]
        [Route("updateOne")]
        public async Task<IActionResult> updateOne(long addressId, Req_Address_create _dto)
        {
            return Ok();
        }

        [HttpDelete]
        [Route("deleteOne")]
        public async Task<IActionResult> deleteOne(long addressId)
        {
            bool tmp = await Program.api_address.deleteOne(addressId);
            if (tmp)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }


    }
}
