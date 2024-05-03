using Jobconnect.Models;
using JobConnect.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Jobconnect.Data
{
    public class AppDbcontext : IdentityDbContext<AppUser>
    {
        public AppDbcontext(DbContextOptions<AppDbcontext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Employer> Employers { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<JobSeeker> JobSeeker { get; set; }
        public DbSet<Proposal> Proposal { get; set; }
        public DbSet<SavedJobs> SavedJobs { get; set; }
        public DbSet<Communication> Communication { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Proposal>()
                .HasOne(p => p.Job)
                .WithMany()
                .HasForeignKey(p => p.JobID)
                .OnDelete(DeleteBehavior.Restrict); // Specify the desired behavior here

            modelBuilder.Entity<SavedJobs>()
                .HasOne(s => s.JobSeeker)
                .WithMany()
                .HasForeignKey(s => s.JobSeekerID)
                .OnDelete(DeleteBehavior.Restrict); // Specify the desired behavior here

            modelBuilder.Entity<Communication>()
                .HasOne(c => c.Sender)
                .WithMany()
                .HasForeignKey(c => c.SenderID)
                .OnDelete(DeleteBehavior.Restrict); // Specify the desired behavior here

            modelBuilder.Entity<Communication>()
                .HasOne(c => c.Recipient)
                .WithMany()
                .HasForeignKey(c => c.RecipientID)
                .OnDelete(DeleteBehavior.Restrict); // Specify the desired behavior here

            modelBuilder.Entity<Communication>()
                .HasOne(c => c.Proposal)
                .WithMany()
                .HasForeignKey(c => c.ProposalID)
                .OnDelete(DeleteBehavior.Restrict); // Specify the desired behavior here

            // Other configurations...

            base.OnModelCreating(modelBuilder);
        }
    }
}
