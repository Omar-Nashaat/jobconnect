using System.Data;

namespace JobConnect.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public string? PhoneNumber { get; set; }

        public int? UserRoleId { get; set; }

        public Role Role { get; set; }

        public bool Status { get; set; }

        public string Address { get; set; }

        public string? RoleName { get; internal set; }
    }
}
