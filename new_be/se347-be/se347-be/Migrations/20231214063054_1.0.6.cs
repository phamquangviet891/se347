using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace se347_be.Migrations
{
    public partial class _106 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "cartID",
                table: "tb_review",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_tb_review_cartID",
                table: "tb_review",
                column: "cartID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_review_tb_cartItem_cartID",
                table: "tb_review",
                column: "cartID",
                principalTable: "tb_cartItem",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_review_tb_cartItem_cartID",
                table: "tb_review");

            migrationBuilder.DropIndex(
                name: "IX_tb_review_cartID",
                table: "tb_review");

            migrationBuilder.DropColumn(
                name: "cartID",
                table: "tb_review");
        }
    }
}
