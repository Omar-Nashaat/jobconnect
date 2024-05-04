using JobConnect.Models;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace JobConnect.Data
{
    public class AppDbcontext : DbContext
    {

        public DbSet<User> Users { get; set; }
        public AppDbcontext(DbContextOptions<AppDbcontext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<User>().Property(U => U.Name).IsRequired().HasMaxLength(25);
            builder.Entity<User>().Property(U => U.Email).IsRequired().HasMaxLength(30);
            builder.Entity<User>().Property(U => U.PhoneNumber).IsRequired().HasMaxLength(25);
            builder.Entity<User>().Property(U => U.Address).IsRequired().HasMaxLength(30);

            builder.Entity<User>().HasOne(U => U.Role).WithMany().HasForeignKey(U => U.UserRoleId);

        }
        public DbSet<User> User { get; set; }
        public DbSet<Role> Roles { get; set; }
    }
}
