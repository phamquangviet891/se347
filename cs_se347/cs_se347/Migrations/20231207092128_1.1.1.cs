using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cs_se347.Migrations
{
    public partial class _111 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_order_tb_cart_cartID",
                table: "tb_order");

            migrationBuilder.DropIndex(
                name: "IX_tb_order_cartID",
                table: "tb_order");

            migrationBuilder.AddColumn<long>(
                name: "userID",
                table: "tb_order",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_tb_order_userID",
                table: "tb_order",
                column: "userID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_order_tb_user_userID",
                table: "tb_order",
                column: "userID",
                principalTable: "tb_user",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_order_tb_user_userID",
                table: "tb_order");

            migrationBuilder.DropIndex(
                name: "IX_tb_order_userID",
                table: "tb_order");

            migrationBuilder.DropColumn(
                name: "userID",
                table: "tb_order");

            migrationBuilder.CreateIndex(
                name: "IX_tb_order_cartID",
                table: "tb_order",
                column: "cartID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_order_tb_cart_cartID",
                table: "tb_order",
                column: "cartID",
                principalTable: "tb_cart",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
