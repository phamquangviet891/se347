using Microsoft.AspNetCore.Mvc;
using se347_be.Model;

namespace se347_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        [HttpPost]
        [Route("createNew")]
        public async Task<IActionResult> createNew(long userId, Address_DTO _dto)
        {
            bool tmp = await Program.api_address.createNew(userId, _dto);
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
        [Route("getByUserId")]
        public async Task<IActionResult> getByUserId(long userId)
        {
            return Ok(Program.api_address.getByUserId(userId));
        }

        [HttpPut]
        [Route("setToDefault")]
        public async Task<IActionResult> setToDefault(long addressId)
        {
            bool tmp = await Program.api_address.setToDefault(addressId);
            if (tmp)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        //[HttpDelete]
        //[Route("deleteOne")]
        //public async Task<IActionResult> deleteOne(long addressId)
        //{
        //    bool tmp = await Program.api_address.deleteOne(addressId);
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
        [Route("default_address")]
        public IActionResult default_address(long user_id)
        {
            return Ok(Program.api_address.get_default_address(user_id));
        }
    }
}
