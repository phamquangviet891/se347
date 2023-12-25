using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace cs_se347.Migrations
{
    public partial class _101 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_order_tb_shop_shopID",
                table: "tb_order");

            migrationBuilder.DropForeignKey(
                name: "FK_tb_order_tb_user_userID",
                table: "tb_order");

            migrationBuilder.DropIndex(
                name: "IX_tb_order_shopID",
                table: "tb_order");

            migrationBuilder.DropColumn(
                name: "userName",
                table: "tb_user");

            migrationBuilder.DropColumn(
                name: "address",
                table: "tb_order");

            migrationBuilder.DropColumn(
                name: "cartID",
                table: "tb_order");

            migrationBuilder.DropColumn(
                name: "list_cart_item",
                table: "tb_order");

            migrationBuilder.DropColumn(
                name: "shopID",
                table: "tb_order");

            migrationBuilder.AlterColumn<long>(
                name: "userID",
                table: "tb_order",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AddColumn<long>(
                name: "addressID",
                table: "tb_order",
                type: "bigint",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "slug",
                table: "tb_category",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

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
                name: "IX_tb_order_addressID",
                table: "tb_order",
                column: "addressID");

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

            migrationBuilder.AddForeignKey(
                name: "FK_tb_order_tb_address_addressID",
                table: "tb_order",
                column: "addressID",
                principalTable: "tb_address",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_order_tb_user_userID",
                table: "tb_order",
                column: "userID",
                principalTable: "tb_user",
                principalColumn: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_cartItem_tb_orderItem_SqlOrderItemID",
                table: "tb_cartItem");

            migrationBuilder.DropForeignKey(
                name: "FK_tb_order_tb_address_addressID",
                table: "tb_order");

            migrationBuilder.DropForeignKey(
                name: "FK_tb_order_tb_user_userID",
                table: "tb_order");

            migrationBuilder.DropTable(
                name: "tb_orderItem");

            migrationBuilder.DropIndex(
                name: "IX_tb_order_addressID",
                table: "tb_order");

            migrationBuilder.DropIndex(
                name: "IX_tb_cartItem_SqlOrderItemID",
                table: "tb_cartItem");

            migrationBuilder.DropColumn(
                name: "addressID",
                table: "tb_order");

            migrationBuilder.DropColumn(
                name: "SqlOrderItemID",
                table: "tb_cartItem");

            migrationBuilder.AddColumn<string>(
                name: "userName",
                table: "tb_user",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<long>(
                name: "userID",
                table: "tb_order",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "address",
                table: "tb_order",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<long>(
                name: "cartID",
                table: "tb_order",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<List<string>>(
                name: "list_cart_item",
                table: "tb_order",
                type: "text[]",
                nullable: false);

            migrationBuilder.AddColumn<long>(
                name: "shopID",
                table: "tb_order",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AlterColumn<string>(
                name: "slug",
                table: "tb_category",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tb_order_shopID",
                table: "tb_order",
                column: "shopID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_order_tb_shop_shopID",
                table: "tb_order",
                column: "shopID",
                principalTable: "tb_shop",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_tb_order_tb_user_userID",
                table: "tb_order",
                column: "userID",
                principalTable: "tb_user",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
