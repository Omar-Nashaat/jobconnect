using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Jobconnect.Migrations
{
    /// <inheritdoc />
    public partial class setProposalTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Proposal",
                columns: table => new
                {
                    ProposalID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    JobID = table.Column<int>(type: "int", nullable: false),
                    JobSeekerID = table.Column<int>(type: "int", nullable: false),
                    CV = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SubmissionDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proposal", x => x.ProposalID);
                    table.ForeignKey(
                        name: "FK_Proposal_JobSeeker_JobSeekerID",
                        column: x => x.JobSeekerID,
                        principalTable: "JobSeeker",
                        principalColumn: "JobSeekerID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Proposal_Jobs_JobID",
                        column: x => x.JobID,
                        principalTable: "Jobs",
                        principalColumn: "JobID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Proposal_JobID",
                table: "Proposal",
                column: "JobID");

            migrationBuilder.CreateIndex(
                name: "IX_Proposal_JobSeekerID",
                table: "Proposal",
                column: "JobSeekerID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Proposal");
        }
    }
}
