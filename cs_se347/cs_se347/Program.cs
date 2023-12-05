namespace cs_se347
{
    public class Program
    {
        public static void Main(string[] args)
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

            app.Run();
        }
    }
}