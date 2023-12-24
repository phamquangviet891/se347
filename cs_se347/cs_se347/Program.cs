using Serilog.Sinks.SystemConsole.Themes;
using Serilog;
using cs_se347.APIs;

namespace cs_se347
{
    public class Program
    {
        public static MyProduct api_product = new MyProduct();
        public static MyCategory api_category = new MyCategory();
        public static MyShop api_shop = new MyShop();
        public static MyUser api_user = new MyUser();
        public static MyCart api_cart = new MyCart();
        public static MyOrder api_order = new MyOrder();
        public static MyAddress api_address = new MyAddress();

        public static async Task Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
                   .MinimumLevel.Debug()
                   .WriteTo.Console(theme: AnsiConsoleTheme.Code)
                   .WriteTo.File("mylog.txt", rollingInterval: RollingInterval.Day)
                   .CreateLogger();
            try
            {
                var builder = WebApplication.CreateBuilder(args);
                builder.Services.AddCors(options =>
                {
                    options.AddDefaultPolicy(builder =>
                    {
                        builder.WithOrigins("http://localhost:3000")
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                            .AllowCredentials();
                    });
                });
                // Add services to the container.

                builder.Services.AddControllers();
                // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
                builder.Services.AddEndpointsApiExplorer();
                builder.Services.AddSwaggerGen();

                var app = builder.Build();

                // Configure the HTTP request pipeline.
                app.UseSwagger();
                app.UseSwaggerUI();
                app.MapGet("/", () => string.Format("Server Se347 - {0}", DateTime.Now));

                app.UseAuthorization();


                app.MapControllers();
                app.UseCors();
                //await api_category.initAsync();
                //await api_shop.initAsync();
                //await api_product.updateSalePrice();
                //await api_category.updateDB_switch_to_Bitis_shop();
                await api_product.tool_delete_space_in_product_option();
                app.Run();
            }
            catch (Exception ex)
            {
                Log.Error(ex.Message);
            }
        }
    }
}