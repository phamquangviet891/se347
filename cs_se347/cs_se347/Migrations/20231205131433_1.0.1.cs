using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cs_se347.Migrations
{
    public partial class _101 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_table_tb_shop_shopID",
                table: "tb_table");

            migrationBuilder.DropPrimaryKey(
                name: "PK_tb_table",
                table: "tb_table");

            migrationBuilder.RenameTable(
                name: "tb_table",
                newName: "tb_product");

            migrationBuilder.RenameIndex(
                name: "IX_tb_table_shopID",
                table: "tb_product",
                newName: "IX_tb_product_shopID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_tb_product",
                table: "tb_product",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_product_tb_shop_shopID",
                table: "tb_product",
                column: "shopID",
                principalTable: "tb_shop",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_product_tb_shop_shopID",
                table: "tb_product");

            migrationBuilder.DropPrimaryKey(
                name: "PK_tb_product",
                table: "tb_product");

            migrationBuilder.RenameTable(
                name: "tb_product",
                newName: "tb_table");

            migrationBuilder.RenameIndex(
                name: "IX_tb_product_shopID",
                table: "tb_table",
                newName: "IX_tb_table_shopID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_tb_table",
                table: "tb_table",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_table_tb_shop_shopID",
                table: "tb_table",
                column: "shopID",
                principalTable: "tb_shop",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
