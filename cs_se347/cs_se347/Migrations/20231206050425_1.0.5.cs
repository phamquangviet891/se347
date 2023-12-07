using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cs_se347.Migrations
{
    public partial class _105 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_product_tb_cateogory_categoryID",
                table: "tb_product");

            migrationBuilder.DropPrimaryKey(
                name: "PK_tb_cateogory",
                table: "tb_cateogory");

            migrationBuilder.RenameTable(
                name: "tb_cateogory",
                newName: "tb_category");

            migrationBuilder.AddPrimaryKey(
                name: "PK_tb_category",
                table: "tb_category",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_product_tb_category_categoryID",
                table: "tb_product",
                column: "categoryID",
                principalTable: "tb_category",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_product_tb_category_categoryID",
                table: "tb_product");

            migrationBuilder.DropPrimaryKey(
                name: "PK_tb_category",
                table: "tb_category");

            migrationBuilder.RenameTable(
                name: "tb_category",
                newName: "tb_cateogory");

            migrationBuilder.AddPrimaryKey(
                name: "PK_tb_cateogory",
                table: "tb_cateogory",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_product_tb_cateogory_categoryID",
                table: "tb_product",
                column: "categoryID",
                principalTable: "tb_cateogory",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
