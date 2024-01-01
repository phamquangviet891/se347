using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace se347_be.Migrations
{
    public partial class _119 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tb_conversation",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    shopID = table.Column<long>(type: "bigint", nullable: false),
                    userID = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_conversation", x => x.ID);
                    table.ForeignKey(
                        name: "FK_tb_conversation_tb_shop_shopID",
                        column: x => x.shopID,
                        principalTable: "tb_shop",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tb_conversation_tb_user_userID",
                        column: x => x.userID,
                        principalTable: "tb_user",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tb_message",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    type = table.Column<bool>(type: "boolean", nullable: false),
                    time = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    conversationID = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_message", x => x.ID);
                    table.ForeignKey(
                        name: "FK_tb_message_tb_conversation_conversationID",
                        column: x => x.conversationID,
                        principalTable: "tb_conversation",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tb_conversation_shopID",
                table: "tb_conversation",
                column: "shopID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_conversation_userID",
                table: "tb_conversation",
                column: "userID");

            migrationBuilder.CreateIndex(
                name: "IX_tb_message_conversationID",
                table: "tb_message",
                column: "conversationID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tb_message");

            migrationBuilder.DropTable(
                name: "tb_conversation");
        }
    }
}
