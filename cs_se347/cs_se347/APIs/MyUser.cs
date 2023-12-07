using cs_se347.Model;

namespace cs_se347.APIs
{
    public class MyUser
    {
        public MyUser() { }
        public async Task<bool> login(string email, string password)
        {
            using (DataContext context = new DataContext())
            {
                SqlUser? user = context.users!.Where(s=>s.email == email && s.password==password).FirstOrDefault();
                if (user != null)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
    }
}
