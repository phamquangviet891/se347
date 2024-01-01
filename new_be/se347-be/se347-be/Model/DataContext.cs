using Microsoft.EntityFrameworkCore;
using System;
using System.Text.RegularExpressions;
using System.Text;

namespace se347_be.Model
{
    public class DataContext:DbContext
    {
        public static Random random = new Random();
        public DbSet<SqlUser> users { get; set; }
        public DbSet<SqlCart> carts { get; set; }
        public DbSet<SqlCartItem> cart_items { get; set; }
        public DbSet<SqlProduct> products { get; set; }
        public DbSet<SqlShop> shops { get; set; }
        public DbSet<SqlCategory> categories { get; set; }
        public DbSet<SqlOrder> orders { get; set; }
        public DbSet<SqlAddress> addresses { get; set; }
        public DbSet<SqlVoucher> vouchers { get; set; } 
        public DbSet<SqlReview> reviews { get; set; }
        public DbSet<SqlNoti> notis { get; set; }   
        public DbSet<SqlConversation> conversations { get; set; }
        public DbSet<SqlMessage> messages { get; set; }
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
              .Replace(" - ","-")
              .Replace("?", "").Replace('"', '-').Replace(' ', '-');
                

            return slug;
        }
        public static int GenerateRandomValue()
        {
            int minValue = 2000;
            int maxValue = 8000;

            return random.Next(minValue, maxValue + 1); // +1 to include the maxValue
        }
        public static long GenerateId()
        {
            long minValue = 2000;
            long maxValue = 8000;

            double randomDouble = random.NextDouble();
            double scaledValue = randomDouble * (maxValue - minValue + 1) + minValue;

            return (long)scaledValue;
        }
        public static string configSql = "Host=192.168.28.81:5432;Database=se347;Username=postgres;Password=postgres";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseNpgsql(configSql);
        }
    }
}
