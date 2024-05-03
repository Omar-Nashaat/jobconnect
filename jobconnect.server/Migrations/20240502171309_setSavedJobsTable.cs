using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Jobconnect.Migrations
{
    /// <inheritdoc />
    public partial class setSavedJobsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SavedJobs",
                columns: table => new
                {
                    SavedJobID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    JobID = table.Column<int>(type: "int", nullable: false),
                    JobSeekerID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SavedJobs", x => x.SavedJobID);
                    table.ForeignKey(
                        name: "FK_SavedJobs_Jobs_JobID",
                        column: x => x.JobID,
                        principalTable: "Jobs",
                        principalColumn: "JobID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SavedJobs_Users_JobSeekerID",
                        column: x => x.JobSeekerID,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SavedJobs_JobID",
                table: "SavedJobs",
                column: "JobID");

            migrationBuilder.CreateIndex(
                name: "IX_SavedJobs_JobSeekerID",
                table: "SavedJobs",
                column: "JobSeekerID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SavedJobs");
        }
    }
}
