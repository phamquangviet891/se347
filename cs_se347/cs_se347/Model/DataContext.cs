using Microsoft.EntityFrameworkCore;
using System;

namespace cs_se347.Model
{
    public class DataContext :DbContext
    {
        public static Random random = new Random();
        public DbSet<SqlUser> users { get; set; }
        public DbSet<SqlCart> carts { get; set; }

        public DbSet<SqlProduct> products { get; set; }
        public DbSet<SqlShop> shops { get; set; }
        public DbSet<SqlCategory> categories{ get; set; }
        public DbSet<SqlOrder> orders { get; set; }
        public DbSet<SqlAddress> addresses { get; set; }


        public static string randomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            return new string(Enumerable.Repeat(chars, length).Select(s => s[random.Next(s.Length)]).ToArray());
        }
        public static float GenerateRandomRating()
        {
            // Generate a random double between 0.0 and 1.0
            double randomValue = random.NextDouble();

            // Scale and shift the random value to the desired range (4.0 to 5.0)
            double ratingRange = 5.0 - 4.0;
            double scaledRandomValue = randomValue * ratingRange;

            // Add the lower bound of the range
            double finalRating = scaledRandomValue + 4.0;

            // Round to one decimal place
            return (float)Math.Round(finalRating, 1);
        }
        public static int GenerateRandomValue()
        {
            // Generate a random value between 2000 and 8000
            int minValue = 2000;
            int maxValue = 8000;

            return random.Next(minValue, maxValue + 1); // +1 to include the maxValue
        }
        public static string configSql = "Host=dpg-clnj3ihll56s73firn4g-a.singapore-postgres.render.com:5432;Database=se347;Username=killerdroy;Password=BsDnku4ycfBdTFLPIGGLPiPyDtn65lBJ";
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseNpgsql(configSql);
        }
    }
}
