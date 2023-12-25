using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace cs_se347.Migrations
{
    public partial class _103 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "cart_items",
                table: "tb_order");

            migrationBuilder.AddColumn<long>(
                name: "SqlOrderItemID",
                table: "tb_cartItem",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "tb_orderItem",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    shopID = table.Column<long>(type: "bigint", nullable: false),
                    orderID = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_orderItem", x => x.ID);
                    table.ForeignKey(
                        name: "FK_tb_orderItem_tb_order_orderID",
                        column: x => x.orderID,
                        principalTable: "tb_order",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tb_orderItem_tb_shop_shopID",
                        column: x => x.shopID,
                        principalTable: "tb_shop",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tb_cartItem_SqlOrderItemID",
                table: "tb_cartItem",
                column: "SqlOrderItemID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_orderItem_orderID",
                table: "tb_orderItem",
                column: "orderID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_orderItem_shopID",
                table: "tb_orderItem",
                column: "shopID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_cartItem_tb_orderItem_SqlOrderItemID",
                table: "tb_cartItem",
                column: "SqlOrderItemID",
                principalTable: "tb_orderItem",
                principalColumn: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_cartItem_tb_orderItem_SqlOrderItemID",
                table: "tb_cartItem");

            migrationBuilder.DropTable(
                name: "tb_orderItem");

            migrationBuilder.DropIndex(
                name: "IX_tb_cartItem_SqlOrderItemID",
                table: "tb_cartItem");

            migrationBuilder.DropColumn(
                name: "SqlOrderItemID",
                table: "tb_cartItem");

            migrationBuilder.AddColumn<List<string>>(
                name: "cart_items",
                table: "tb_order",
                type: "text[]",
                nullable: true);
        }
    }
}
