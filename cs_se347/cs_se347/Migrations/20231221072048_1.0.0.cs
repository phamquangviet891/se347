using System;
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
                name: "tb_category",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    title = table.Column<string>(type: "text", nullable: false),
                    image = table.Column<string>(type: "text", nullable: false),
                    slug = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_category", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "tb_shop",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "text", nullable: false),
                    logo = table.Column<string>(type: "text", nullable: false),
                    rating = table.Column<double>(type: "double precision", nullable: false),
                    danh_gia = table.Column<string>(type: "text", nullable: false),
                    isDeleted = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_shop", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "tb_user",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    fullName = table.Column<string>(type: "text", nullable: false),
                    userName = table.Column<string>(type: "text", nullable: false),
                    email = table.Column<string>(type: "text", nullable: false),
                    phoneNumber = table.Column<string>(type: "text", nullable: false),
                    password = table.Column<string>(type: "text", nullable: false),
                    avatar = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_user", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "tb_product",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    productName = table.Column<string>(type: "text", nullable: false),
                    productPrice = table.Column<long>(type: "bigint", nullable: false),
                    productSalePrice = table.Column<long>(type: "bigint", nullable: false),
                    discount = table.Column<int>(type: "integer", nullable: false),
                    sold = table.Column<int>(type: "integer", nullable: false),
                    rating = table.Column<float>(type: "real", nullable: false),
                    productImage = table.Column<string>(type: "text", nullable: false),
                    productListImage = table.Column<List<string>>(type: "text[]", nullable: false),
                    options = table.Column<List<string>>(type: "text[]", nullable: false),
                    description = table.Column<string>(type: "text", nullable: false),
                    detail = table.Column<List<string>>(type: "text[]", nullable: false),
                    shopID = table.Column<long>(type: "bigint", nullable: false),
                    categoryID = table.Column<long>(type: "bigint", nullable: false),
                    inventory = table.Column<int>(type: "integer", nullable: false),
                    isDeleted = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_product", x => x.ID);
                    table.ForeignKey(
                        name: "FK_tb_product_tb_category_categoryID",
                        column: x => x.categoryID,
                        principalTable: "tb_category",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tb_product_tb_shop_shopID",
                        column: x => x.shopID,
                        principalTable: "tb_shop",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tb_address",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userID = table.Column<long>(type: "bigint", nullable: false),
                    ho_va_ten = table.Column<string>(type: "text", nullable: false),
                    so_dien_thoai = table.Column<string>(type: "text", nullable: false),
                    tinh_thanh_pho = table.Column<string>(type: "text", nullable: false),
                    quan_huyen = table.Column<string>(type: "text", nullable: false),
                    phuong_xa = table.Column<string>(type: "text", nullable: false),
                    dia_chi_detail = table.Column<string>(type: "text", nullable: false),
                    dia_chi_mac_dinh = table.Column<bool>(type: "boolean", nullable: false),
                    isDeleted = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_address", x => x.ID);
                    table.ForeignKey(
                        name: "FK_tb_address_tb_user_userID",
                        column: x => x.userID,
                        principalTable: "tb_user",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tb_cart",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    shopID = table.Column<long>(type: "bigint", nullable: false),
                    userID = table.Column<long>(type: "bigint", nullable: false),
                    isDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    create_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    modified_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_cart", x => x.ID);
                    table.ForeignKey(
                        name: "FK_tb_cart_tb_shop_shopID",
                        column: x => x.shopID,
                        principalTable: "tb_shop",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tb_cart_tb_user_userID",
                        column: x => x.userID,
                        principalTable: "tb_user",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tb_order",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    status = table.Column<int>(type: "integer", nullable: false),
                    cartID = table.Column<long>(type: "bigint", nullable: false),
                    userID = table.Column<long>(type: "bigint", nullable: false),
                    shopID = table.Column<long>(type: "bigint", nullable: false),
                    list_cart_item = table.Column<List<string>>(type: "text[]", nullable: false),
                    address = table.Column<string>(type: "text", nullable: false),
                    time = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_order", x => x.ID);
                    table.ForeignKey(
                        name: "FK_tb_order_tb_shop_shopID",
                        column: x => x.shopID,
                        principalTable: "tb_shop",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tb_order_tb_user_userID",
                        column: x => x.userID,
                        principalTable: "tb_user",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tb_cartItem",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    cartID = table.Column<long>(type: "bigint", nullable: false),
                    productID = table.Column<long>(type: "bigint", nullable: false),
                    quantity = table.Column<int>(type: "integer", nullable: false),
                    option = table.Column<string>(type: "text", nullable: false),
                    create_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    modified_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    isDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    status = table.Column<int>(type: "integer", nullable: false),
                    orderID = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_cartItem", x => x.ID);
                    table.ForeignKey(
                        name: "FK_tb_cartItem_tb_cart_cartID",
                        column: x => x.cartID,
                        principalTable: "tb_cart",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tb_cartItem_tb_order_orderID",
                        column: x => x.orderID,
                        principalTable: "tb_order",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_tb_cartItem_tb_product_productID",
                        column: x => x.productID,
                        principalTable: "tb_product",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tb_address_userID",
                table: "tb_address",
                column: "userID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_cart_shopID",
                table: "tb_cart",
                column: "shopID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_cart_userID",
                table: "tb_cart",
                column: "userID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_cartItem_cartID",
                table: "tb_cartItem",
                column: "cartID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_cartItem_orderID",
                table: "tb_cartItem",
                column: "orderID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_cartItem_productID",
                table: "tb_cartItem",
                column: "productID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_order_shopID",
                table: "tb_order",
                column: "shopID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_order_userID",
                table: "tb_order",
                column: "userID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_product_categoryID",
                table: "tb_product",
                column: "categoryID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_product_shopID",
                table: "tb_product",
                column: "shopID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tb_address");

            migrationBuilder.DropTable(
                name: "tb_cartItem");

            migrationBuilder.DropTable(
                name: "tb_cart");

            migrationBuilder.DropTable(
                name: "tb_order");

            migrationBuilder.DropTable(
                name: "tb_product");

            migrationBuilder.DropTable(
                name: "tb_user");

            migrationBuilder.DropTable(
                name: "tb_category");

            migrationBuilder.DropTable(
                name: "tb_shop");
        }
    }
}
