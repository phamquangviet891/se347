using Microsoft.EntityFrameworkCore;
using System;
using System.Text.RegularExpressions;
using System.Text;

namespace cs_se347.Model
{
    public class DataContext :DbContext
    {
        public static Random random = new Random();
        public DbSet<SqlUser> users { get; set; }
        public DbSet<SqlCart> carts { get; set; }
        public DbSet<SqlCartItem> cart_items { get; set; }
        public DbSet<SqlProduct> products { get; set; }
        public DbSet<SqlShop> shops { get; set; }
        public DbSet<SqlCategory> categories{ get; set; }
        public DbSet<SqlOrder> orders { get; set; }
        public DbSet<SqlAddress> addresses { get; set; }
        public DbSet<SqlOrderItem> orders_items { get; set; }

        public static string randomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            return new string(Enumerable.Repeat(chars, length).Select(s => s[random.Next(s.Length)]).ToArray());
        }
        public static float GenerateRandomRating()
        {
            double randomValue = random.NextDouble();

            double ratingRange = 5.0 - 4.0;
            double scaledRandomValue = randomValue * ratingRange;

            double finalRating = scaledRandomValue + 4.0;

            return (float)Math.Round(finalRating, 1);
        }
        public static string GetSlug(string text)
        {
            Regex regex = new Regex("\\p{IsCombiningDiacriticalMarks}+");
            string slug = text.Normalize(NormalizationForm.FormD).Trim().ToLower();

            slug = regex.Replace(slug, String.Empty)
              .Replace('\u0111', 'd').Replace('\u0110', 'D')
              .Replace(",", "-").Replace(".", "-").Replace("!", "")
              .Replace("(", "").Replace(")", "").Replace(";", "-")
              .Replace("/", "-").Replace("%", "ptram").Replace("&", "va")
              .Replace(" - ", "-")
              .Replace("?", "").Replace('"', '-').Replace(' ', '-');


            return slug;
        }
        public static int GenerateRandomValue()
        {
            int minValue = 2000;
            int maxValue = 8000;

            return random.Next(minValue, maxValue + 1); // +1 to include the maxValue
        }
        public static int GenerateRandomValue_Order_id()
        {
            int minValue = 200000000;
            int maxValue = 999999999;

            return random.Next(minValue, maxValue + 1); // +1 to include the maxValue
        }
        public static string configSql = "Host=dpg-clnj3ihll56s73firn4g-a.singapore-postgres.render.com:5432;Database=se347;Username=killerdroy;Password=BsDnku4ycfBdTFLPIGGLPiPyDtn65lBJ";
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseNpgsql(configSql);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SqlUser>().HasMany<SqlOrder>(s=>s.orders).WithOne(s=>s.user);   
           // modelBuilder.Entity<SqlShop>().HasMany<SqlOrderItem>(s=>s.orders).WithOne(s=>s.shop);
        }
    }
}
