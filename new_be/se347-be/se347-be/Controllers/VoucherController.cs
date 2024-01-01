using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using static se347_be.APIs.MyVoucher;

namespace se347_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VoucherController : ControllerBase
    {
        [HttpPost]
        [Route("createNew")]
        public async Task<IActionResult> createNew(long shopId, Voucher_DTO _dto)
        {
            bool tmp = await Program.api_voucher.addNewVoucher(shopId, _dto);
            if(tmp)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
        [HttpGet]
        [Route("listByCart")]
        public IActionResult listByCart(long cart_id)
        {
            return Ok(Program.api_voucher.getVoucherByCart(cart_id));
        }

        [HttpGet]
        [Route("byShop")]
        public IActionResult getVouchersInShop(long shop_id, int page, int page_size) {
            return Ok(Program.api_voucher.getVouchersInShop(shop_id,page,page_size));
        }
        [HttpPost]
        [Route("warehouse/save")]
        public async Task<IActionResult> warehouse_save(long user_id, long voucher_id)
        {
            bool tmp = await Program.api_voucher.warehouse_save(user_id, voucher_id);
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
        [Route("warehouse/shop_voucher")]
        public IActionResult warehouse_shop_voucher(long user_id, int page, int page_size)
        {
            return Ok(Program.api_voucher.warehouse_shop_voucher(user_id,page,page_size));
        }
    }
}
