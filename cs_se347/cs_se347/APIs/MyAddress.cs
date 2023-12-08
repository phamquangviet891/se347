using cs_se347.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cs_se347.APIs
{
    public class MyAddress
    {
        public MyAddress() { }
        public async Task<bool> createNew(long userId, Req_Address_create _dto)
        {
            using (DataContext context = new DataContext())
            {
                SqlUser user = context.users.Where(s => s.ID == userId).FirstOrDefault();
                if (user == null)
                {
                    return false;
                }
                SqlAddress address = new SqlAddress();
                address.user = user;
                address.ho_va_ten = _dto.ho_va_ten;
                address.cong_ty = _dto.cong_ty;
                address.so_dien_thoai = _dto.so_dien_thoai;
                address.tinh_thanh_pho = _dto.tinh_thanh_pho;
                address.quan_huyen = _dto.quan_huyen;
                address.phuong_xa = _dto.phuong_xa;
                address.dia_chi = _dto.dia_chi;
                address.dia_chi_mac_dinh = _dto.dia_chi_mac_dinh;
                if (address.dia_chi_mac_dinh)
                {
                    SqlAddress tmp = context.addresses.Include(s => s.user).Where(s => s.user == user && s.dia_chi_mac_dinh).FirstOrDefault();
                    if(tmp != null)
                    {
                        tmp.dia_chi_mac_dinh = false;
                    }
                }
                address.dia_chi_mac_dinh = _dto.dia_chi_mac_dinh;
                address.loai_dia_chi = _dto.loai_dia_chi;

                context.addresses.Add(address);
                await context.SaveChangesAsync();
                return true;
            }
        }

        public List<Address_Short> getByUserId(long userId)
        {
            List<Address_Short> response = new List<Address_Short>();
            using (DataContext context = new DataContext())
            {
                SqlUser user = context.users.Where(s => s.ID == userId).FirstOrDefault();
                if (user == null)
                {
                    return response;
                }

                List<SqlAddress> addresses = context.addresses.Include(s => s.user).Where(s => s.user == user).ToList();
                foreach (SqlAddress address in addresses)
                {
                    Address_Short item = new Address_Short();
                    item.ID= address.ID;
                    item.ho_va_ten = address.ho_va_ten;
                    item.dia_chi_full = address.dia_chi + ", " + address.phuong_xa + ", " + address.quan_huyen + ", " + address.tinh_thanh_pho;
                    item.so_dien_thoai=address.so_dien_thoai;
                    item.dia_chi_mac_dinh = address.dia_chi_mac_dinh;
                    response.Add(item);
                }
                response = response.OrderByDescending(s => s.dia_chi_mac_dinh).ToList(); ;
                return response;
            }

        }
    }
}
