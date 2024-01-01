using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace se347_be.Migrations
{
    public partial class _120 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "message",
                table: "tb_message",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "is_seen",
                table: "tb_conversation",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "message",
                table: "tb_message");

            migrationBuilder.DropColumn(
                name: "is_seen",
                table: "tb_conversation");
        }
    }
}
