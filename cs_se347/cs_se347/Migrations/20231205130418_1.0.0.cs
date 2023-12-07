using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace cs_se347.Migrations
{
    public partial class _100 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tb_shop",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_shop", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "tb_table",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    productName = table.Column<string>(type: "text", nullable: false),
                    productPrice = table.Column<int>(type: "integer", nullable: false),
                    productSalePrice = table.Column<int>(type: "integer", nullable: false),
                    discount = table.Column<int>(type: "integer", nullable: false),
                    sold = table.Column<int>(type: "integer", nullable: false),
                    rating = table.Column<float>(type: "real", nullable: false),
                    productImage = table.Column<string>(type: "text", nullable: false),
                    productListImage = table.Column<List<string>>(type: "text[]", nullable: false),
                    options = table.Column<List<string>>(type: "text[]", nullable: false),
                    shopID = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_table", x => x.ID);
                    table.ForeignKey(
                        name: "FK_tb_table_tb_shop_shopID",
                        column: x => x.shopID,
                        principalTable: "tb_shop",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tb_table_shopID",
                table: "tb_table",
                column: "shopID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tb_table");

            migrationBuilder.DropTable(
                name: "tb_shop");
        }
    }
}
