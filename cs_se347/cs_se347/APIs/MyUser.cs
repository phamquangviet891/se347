using cs_se347.Model;

namespace cs_se347.APIs
{
    public class MyUser
    {
        public MyUser() { }
        public class Login_RES
        {
            public long user_id { get; set; }
            public string fullName { get; set; }
        }
        public Login_RES login(string email, string password)
        {
            Login_RES response = new Login_RES();
            response.user_id = -1;
            response.fullName = "";
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            {
                return response;
            }
            using (DataContext context = new DataContext())
            {
                SqlUser? user = context.users!.Where(s => s.email == email && s.password == password).FirstOrDefault();
                if (user != null)
                {
                    response.fullName = user.fullName;
                    response.user_id = user.ID;
                }
                return response;
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
    }
}
