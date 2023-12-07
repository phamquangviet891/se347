using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cs_se347.Migrations
{
    public partial class _102 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "description",
                table: "tb_product",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<List<string>>(
                name: "detail",
                table: "tb_product",
                type: "text[]",
                nullable: false);

            migrationBuilder.AddColumn<bool>(
                name: "isDeleted",
                table: "tb_product",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "description",
                table: "tb_product");

            migrationBuilder.DropColumn(
                name: "detail",
                table: "tb_product");

            migrationBuilder.DropColumn(
                name: "isDeleted",
                table: "tb_product");
        }
    }
}
