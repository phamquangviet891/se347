using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cs_se347.Migrations
{
    public partial class _104 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "danh_gia",
                table: "tb_shop",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "logo",
                table: "tb_shop",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "rating",
                table: "tb_shop",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "danh_gia",
                table: "tb_shop");

            migrationBuilder.DropColumn(
                name: "logo",
                table: "tb_shop");

            migrationBuilder.DropColumn(
                name: "rating",
                table: "tb_shop");
        }
    }
}
