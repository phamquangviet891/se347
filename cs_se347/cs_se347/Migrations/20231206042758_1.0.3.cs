using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace cs_se347.Migrations
{
    public partial class _103 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "categoryID",
                table: "tb_product",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateTable(
                name: "tb_cateogory",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    title = table.Column<string>(type: "text", nullable: false),
                    image = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_cateogory", x => x.ID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tb_product_categoryID",
                table: "tb_product",
                column: "categoryID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_product_tb_cateogory_categoryID",
                table: "tb_product",
                column: "categoryID",
                principalTable: "tb_cateogory",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_product_tb_cateogory_categoryID",
                table: "tb_product");

            migrationBuilder.DropTable(
                name: "tb_cateogory");

            migrationBuilder.DropIndex(
                name: "IX_tb_product_categoryID",
                table: "tb_product");

            migrationBuilder.DropColumn(
                name: "categoryID",
                table: "tb_product");
        }
    }
}
