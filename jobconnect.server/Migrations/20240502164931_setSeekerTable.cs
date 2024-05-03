using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Jobconnect.Migrations
{
    /// <inheritdoc />
    public partial class setSeekerTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Budget",
                table: "Jobs");

            migrationBuilder.CreateTable(
                name: "JobSeeker",
                columns: table => new
                {
                    JobSeekerID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobSeeker", x => x.JobSeekerID);
                    table.ForeignKey(
                        name: "FK_JobSeeker_Users_UserID",
                        column: x => x.UserID,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_JobSeeker_UserID",
                table: "JobSeeker",
                column: "UserID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JobSeeker");

            migrationBuilder.AddColumn<decimal>(
                name: "Budget",
                table: "Jobs",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);
        }
    }
}
