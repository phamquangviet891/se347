using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cs_se347.Migrations
{
    public partial class _104 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_order_tb_address_addressID",
                table: "tb_order");

            migrationBuilder.DropIndex(
                name: "IX_tb_order_addressID",
                table: "tb_order");

            migrationBuilder.DropColumn(
                name: "addressID",
                table: "tb_order");

            migrationBuilder.AddColumn<string>(
                name: "address",
                table: "tb_order",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "address",
                table: "tb_order");

            migrationBuilder.AddColumn<long>(
                name: "addressID",
                table: "tb_order",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tb_order_addressID",
                table: "tb_order",
                column: "addressID");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_order_tb_address_addressID",
                table: "tb_order",
                column: "addressID",
                principalTable: "tb_address",
                principalColumn: "ID");
        }
    }
}
