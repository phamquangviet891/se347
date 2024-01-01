using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace se347_be.Migrations
{
    public partial class _103 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "userID",
                table: "tb_review",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_tb_review_userID",
                table: "tb_review",
                column: "userID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_review_tb_user_userID",
                table: "tb_review",
                column: "userID",
                principalTable: "tb_user",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_review_tb_user_userID",
                table: "tb_review");

            migrationBuilder.DropIndex(
                name: "IX_tb_review_userID",
                table: "tb_review");

            migrationBuilder.DropColumn(
                name: "userID",
                table: "tb_review");
        }
    }
}
