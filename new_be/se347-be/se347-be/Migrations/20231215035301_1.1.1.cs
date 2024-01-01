using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace se347_be.Migrations
{
    public partial class _111 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_cartItem_tb_order_SqlOrderID",
                table: "tb_cartItem");

            migrationBuilder.RenameColumn(
                name: "SqlOrderID",
                table: "tb_cartItem",
                newName: "orderID");

            migrationBuilder.RenameIndex(
                name: "IX_tb_cartItem_SqlOrderID",
                table: "tb_cartItem",
                newName: "IX_tb_cartItem_orderID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_cartItem_tb_order_orderID",
                table: "tb_cartItem",
                column: "orderID",
                principalTable: "tb_order",
                principalColumn: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_cartItem_tb_order_orderID",
                table: "tb_cartItem");

            migrationBuilder.RenameColumn(
                name: "orderID",
                table: "tb_cartItem",
                newName: "SqlOrderID");

            migrationBuilder.RenameIndex(
                name: "IX_tb_cartItem_orderID",
                table: "tb_cartItem",
                newName: "IX_tb_cartItem_SqlOrderID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_cartItem_tb_order_SqlOrderID",
                table: "tb_cartItem",
                column: "SqlOrderID",
                principalTable: "tb_order",
                principalColumn: "ID");
        }
    }
}
