using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace cs_se347.Migrations
{
    public partial class _112 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isDeleted",
                table: "tb_shop",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AlterColumn<long>(
                name: "productSalePrice",
                table: "tb_product",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<long>(
                name: "productPrice",
                table: "tb_product",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.CreateTable(
                name: "tb_address",
                columns: table => new
                {
                    ID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userID = table.Column<long>(type: "bigint", nullable: false),
                    ho_va_ten = table.Column<string>(type: "text", nullable: false),
                    cong_ty = table.Column<string>(type: "text", nullable: false),
                    so_dien_thoai = table.Column<string>(type: "text", nullable: false),
                    tinh_thanh_pho = table.Column<string>(type: "text", nullable: false),
                    quan_huyen = table.Column<string>(type: "text", nullable: false),
                    phuong_xa = table.Column<string>(type: "text", nullable: false),
                    dia_chi = table.Column<string>(type: "text", nullable: false),
                    loai_dia_chi = table.Column<bool>(type: "boolean", nullable: false),
                    dia_chi_mac_dinh = table.Column<bool>(type: "boolean", nullable: false)
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

            migrationBuilder.CreateIndex(
                name: "IX_tb_address_userID",
                table: "tb_address",
                column: "userID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tb_address");

            migrationBuilder.DropColumn(
                name: "isDeleted",
                table: "tb_shop");

            migrationBuilder.AlterColumn<int>(
                name: "productSalePrice",
                table: "tb_product",
                type: "integer",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AlterColumn<int>(
                name: "productPrice",
                table: "tb_product",
                type: "integer",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");
        }
    }
}
