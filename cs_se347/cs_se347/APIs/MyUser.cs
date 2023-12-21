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
    }
}
