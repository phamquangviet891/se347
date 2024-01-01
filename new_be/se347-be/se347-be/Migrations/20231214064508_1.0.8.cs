using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace se347_be.Migrations
{
    public partial class _108 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_review_tb_product_SqlProductID",
                table: "tb_review");

            migrationBuilder.DropIndex(
                name: "IX_tb_review_SqlProductID",
                table: "tb_review");

            migrationBuilder.DropColumn(
                name: "SqlProductID",
                table: "tb_review");

            migrationBuilder.AddColumn<long>(
                name: "productID",
                table: "tb_review",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_tb_review_productID",
                table: "tb_review",
                column: "productID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_review_tb_product_productID",
                table: "tb_review",
                column: "productID",
                principalTable: "tb_product",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_review_tb_product_productID",
                table: "tb_review");

            migrationBuilder.DropIndex(
                name: "IX_tb_review_productID",
                table: "tb_review");

            migrationBuilder.DropColumn(
                name: "productID",
                table: "tb_review");

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
                name: "FK_tb_review_tb_product_SqlProductID",
                table: "tb_review",
                column: "SqlProductID",
                principalTable: "tb_product",
                principalColumn: "ID");
        }
    }
}
