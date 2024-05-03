using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Jobconnect.Migrations
{
    /// <inheritdoc />
    public partial class setCommunication : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Communication",
                columns: table => new
                {
                    CommunicationID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SenderID = table.Column<int>(type: "int", nullable: false),
                    RecipientID = table.Column<int>(type: "int", nullable: false),
                    ProposalID = table.Column<int>(type: "int", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Communication", x => x.CommunicationID);
                    table.ForeignKey(
                        name: "FK_Communication_Proposal_ProposalID",
                        column: x => x.ProposalID,
                        principalTable: "Proposal",
                        principalColumn: "ProposalID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Communication_Users_RecipientID",
                        column: x => x.RecipientID,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Communication_Users_SenderID",
                        column: x => x.SenderID,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Communication_ProposalID",
                table: "Communication",
                column: "ProposalID");

            migrationBuilder.CreateIndex(
                name: "IX_Communication_RecipientID",
                table: "Communication",
                column: "RecipientID");

            migrationBuilder.CreateIndex(
                name: "IX_Communication_SenderID",
                table: "Communication",
                column: "SenderID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Communication");
        }
    }
}
