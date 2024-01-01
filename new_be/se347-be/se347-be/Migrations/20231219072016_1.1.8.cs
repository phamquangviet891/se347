using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace se347_be.Migrations
{
    public partial class _118 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tb_noti",
                columns: table => new
                {
                    noti_ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    title = table.Column<string>(type: "text", nullable: false),
                    image = table.Column<string>(type: "text", nullable: false),
                    time_Sent = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    description = table.Column<string>(type: "text", nullable: false),
                    isSeen = table.Column<bool>(type: "boolean", nullable: false),
                    time_seen = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    id_routing = table.Column<string>(type: "text", nullable: true),
                    type_routing = table.Column<string>(type: "text", nullable: true),
                    isDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    type_receiver = table.Column<bool>(type: "boolean", nullable: false),
                    userID = table.Column<long>(type: "bigint", nullable: true),
                    shopID = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_noti", x => x.noti_ID);
                    table.ForeignKey(
                        name: "FK_tb_noti_tb_shop_shopID",
                        column: x => x.shopID,
                        principalTable: "tb_shop",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_tb_noti_tb_user_userID",
                        column: x => x.userID,
                        principalTable: "tb_user",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_tb_noti_shopID",
                table: "tb_noti",
                column: "shopID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_noti_userID",
                table: "tb_noti",
                column: "userID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tb_noti");
        }
    }
}
