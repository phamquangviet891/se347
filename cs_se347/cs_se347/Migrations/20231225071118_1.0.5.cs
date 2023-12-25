using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cs_se347.Migrations
{
    public partial class _105 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_cartItem_tb_orderItem_SqlOrderItemID",
                table: "tb_cartItem");

            migrationBuilder.DropIndex(
                name: "IX_tb_cartItem_SqlOrderItemID",
                table: "tb_cartItem");

            migrationBuilder.DropColumn(
                name: "SqlOrderItemID",
                table: "tb_cartItem");

            migrationBuilder.AddColumn<List<string>>(
                name: "list_cart_item",
                table: "tb_orderItem",
                type: "text[]",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "list_cart_item",
                table: "tb_orderItem");

            migrationBuilder.AddColumn<long>(
                name: "SqlOrderItemID",
                table: "tb_cartItem",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tb_cartItem_SqlOrderItemID",
                table: "tb_cartItem",
                column: "SqlOrderItemID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_cartItem_tb_orderItem_SqlOrderItemID",
                table: "tb_cartItem",
                column: "SqlOrderItemID",
                principalTable: "tb_orderItem",
                principalColumn: "ID");
        }
    }
}
