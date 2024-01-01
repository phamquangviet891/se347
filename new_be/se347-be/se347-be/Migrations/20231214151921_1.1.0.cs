using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace se347_be.Migrations
{
    public partial class _110 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "cong_ty",
                table: "tb_address");

            migrationBuilder.DropColumn(
                name: "loai_dia_chi",
                table: "tb_address");

            migrationBuilder.RenameColumn(
                name: "dia_chi",
                table: "tb_address",
                newName: "dia_chi_detail");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "dia_chi_detail",
                table: "tb_address",
                newName: "dia_chi");

            migrationBuilder.AddColumn<string>(
                name: "cong_ty",
                table: "tb_address",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "loai_dia_chi",
                table: "tb_address",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }
    }
}
