using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace se347_be.Migrations
{
    public partial class _115 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "voucher",
                table: "tb_order");

            migrationBuilder.AddColumn<List<string>>(
                name: "vouchers",
                table: "tb_order",
                type: "text[]",
                nullable: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "vouchers",
                table: "tb_order");

            migrationBuilder.AddColumn<string>(
                name: "voucher",
                table: "tb_order",
                type: "text",
                nullable: true);
        }
    }
}
