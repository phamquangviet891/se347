using Microsoft.AspNetCore.Http;
using se347_be.Model;
using static se347_be.Controllers.UserController;

namespace se347_be.APIs
{
    public class MyUser
    {
        public MyUser() { }
        public async Task initAsync()
        {
            using (DataContext context = new DataContext())
            {
                SqlUser? admin = context.users.Where(s => s.userName.CompareTo("admin") == 0).FirstOrDefault();
                if (admin == null)
                {
                    SqlUser newAdmin = new SqlUser();
                    newAdmin.userName = "admin";
                    newAdmin.password = "admin";
                    newAdmin.fullName = "Phạm Quang Việt";
                    newAdmin.phoneNumber = "0777785341";
                    context.users.Add(newAdmin);
                    await context.SaveChangesAsync();
                }
                else if (admin.password.CompareTo("admin") != 0)
                {
                    admin.password = "admin";
                    await context.SaveChangesAsync();
                }

            }
        }
        public Login_RES login(string username, string password)
        {
            Login_RES login_DTO = new Login_RES();
            login_DTO.user_id = -1;
            login_DTO.username = "";
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                return login_DTO;
            }
            using (DataContext context = new DataContext())
            {
                SqlUser? user = context.users!.Where(s => s.userName == username && s.password == password).FirstOrDefault();
                if (user != null)
                {
                    login_DTO.user_id = user.ID;
                    login_DTO.username = username;
                }
                return login_DTO;
            }
        }

        public async Task<bool> register(string username, string email, string phoneNumber, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password) || string.IsNullOrEmpty(email) || string.IsNullOrEmpty(phoneNumber))
            {
                return false;
            }
            using (DataContext context = new DataContext())
            {
                bool tmp = context.users!.Where(s => s.email == email || s.userName == username).Any();
                if (tmp)
                {
                    return false;
                }
                else
                {
                    SqlUser user = new SqlUser();
                    user.email = email;
                    user.phoneNumber = phoneNumber;
                    user.password = password;
                    user.userName = username;
                    context.users!.Add(user);
                    await context.SaveChangesAsync();
                    return true;
                }
            }
        }

        public Info_DTO get_info(long user_id)
        {
            Info_DTO response = new Info_DTO();
            using (DataContext context = new DataContext())
            {
                SqlUser? user = context.users.Where(s => s.ID == user_id).FirstOrDefault();
                if (user == null)
                {
                    return response;
                }
                response.userName = user.userName;
                response.fullName = user.fullName;
                response.email = user.email;
                response.phoneNumber = user.phoneNumber;
                response.avatar = user.avatar;
            }
            return response;
        }
        public async Task<bool> update_info(long user_id, string fullName, string userName, string email, string phoneNumber, List<IFormFile> form_files)
        {
            if (string.IsNullOrEmpty(fullName) || string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(email) || string.IsNullOrEmpty(phoneNumber))
            {
                return false;
            }
            using (DataContext context = new DataContext())
            {
                SqlUser? user = context.users.Where(s => s.ID == user_id).FirstOrDefault();

                if (user == null)
                {
                    return false;
                }
                user.fullName = fullName;
                user.email = email;
                user.phoneNumber = phoneNumber;
                user.userName = userName;
                if (form_files.Any())
                {
                    string url = await Program.api_cloudinary.uploadImage(form_files[0]);
                    if (!string.IsNullOrEmpty(url))
                    {
                        user.avatar = url;
                    }
                }

                await context.SaveChangesAsync();
                return true;
            }
        }
    }
}
