using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace se347_be.Migrations
{
    public partial class _107 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_review_tb_cartItem_cartID",
                table: "tb_review");

            migrationBuilder.DropForeignKey(
                name: "FK_tb_review_tb_product_productID",
                table: "tb_review");

            migrationBuilder.DropIndex(
                name: "IX_tb_review_cartID",
                table: "tb_review");

            migrationBuilder.DropColumn(
                name: "cartID",
                table: "tb_review");

            migrationBuilder.RenameColumn(
                name: "productID",
                table: "tb_review",
                newName: "cart_itemID");

            migrationBuilder.RenameIndex(
                name: "IX_tb_review_productID",
                table: "tb_review",
                newName: "IX_tb_review_cart_itemID");

            migrationBuilder.AddColumn<long>(
                name: "SqlProductID",
                table: "tb_review",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tb_review_SqlProductID",
                table: "tb_review",
                column: "SqlProductID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_review_tb_cartItem_cart_itemID",
                table: "tb_review",
                column: "cart_itemID",
                principalTable: "tb_cartItem",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_tb_review_tb_product_SqlProductID",
                table: "tb_review",
                column: "SqlProductID",
                principalTable: "tb_product",
                principalColumn: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_review_tb_cartItem_cart_itemID",
                table: "tb_review");

            migrationBuilder.DropForeignKey(
                name: "FK_tb_review_tb_product_SqlProductID",
                table: "tb_review");

            migrationBuilder.DropIndex(
                name: "IX_tb_review_SqlProductID",
                table: "tb_review");

            migrationBuilder.DropColumn(
                name: "SqlProductID",
                table: "tb_review");

            migrationBuilder.RenameColumn(
                name: "cart_itemID",
                table: "tb_review",
                newName: "productID");

            migrationBuilder.RenameIndex(
                name: "IX_tb_review_cart_itemID",
                table: "tb_review",
                newName: "IX_tb_review_productID");

            migrationBuilder.AddColumn<long>(
                name: "cartID",
                table: "tb_review",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_tb_review_cartID",
                table: "tb_review",
                column: "cartID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_review_tb_cartItem_cartID",
                table: "tb_review",
                column: "cartID",
                principalTable: "tb_cartItem",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_tb_review_tb_product_productID",
                table: "tb_review",
                column: "productID",
                principalTable: "tb_product",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
