using Serilog.Sinks.SystemConsole.Themes;
using Serilog;
using se347_be.APIs;
using se347_be.Model;
using System.Net;
using CloudinaryDotNet.Actions;

namespace se347_be
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
        public static MyVoucher api_voucher = new MyVoucher();
        public static MyReview api_review = new MyReview();
        public static MyCloudinary api_cloudinary = new MyCloudinary();
        public static MySellser api_seller = new MySellser();
        public static MyNoti api_noti = new MyNoti();
        public static MyChat api_chat = new MyChat();
        public static async Task Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
                   .MinimumLevel.Debug()
                   .WriteTo.Console(theme: AnsiConsoleTheme.Code)
                   .WriteTo.File("mylog.txt", rollingInterval: RollingInterval.Day)
                   .CreateLogger();
            var builder = WebApplication.CreateBuilder(args);
            //builder.WebHost.ConfigureKestrel((context, option) =>
            //{
            //    option.ListenAnyIP(5000, listenOptions =>
            //    {

            //    });
            //    option.ListenAnyIP(5005, listenOptions =>
            //    {

            //    });
            //    option.Limits.MaxConcurrentConnections = null;
            //    option.Limits.MaxRequestBodySize = null;
            //    option.Limits.MaxRequestBufferSize = null;
            //});
            builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins("http://localhost:5197")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                    builder.WithOrigins("http://localhost:5173")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                    builder.WithOrigins("http://192.168.28.81:3000")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
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
            app.UseSwagger();
            app.UseSwaggerUI();
            app.UseAuthorization();

            //app.UseHttpsRedirection();

            app.MapGet("/api", () => string.Format("Server Se214 - {0}", DateTime.Now));
            Log.Information("Server is live!");
            //await api_category.added_slug();
            //await api_user.initAsync();   
            //await api_voucher.initAsyn();
            //await api_category.initAsync();
            //await api_shop.initAsync();
            //await api_category.tool_update_product_to_Bitis();
            //await api_product.test_update_status();
            //await api_cart.tool_remove_wrong_cart_item();
            await api_product.tool_update_brand_toSe347();
            app.MapControllers();
            app.UseCors();

            app.Run();
        }
    }
}