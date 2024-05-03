using System.ComponentModel.DataAnnotations;

namespace Jobconnect.Models
{
    public class dtoNewUser
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        [MinLength(6)]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        [Required]
        public string UserType { get; set; } // "JobSeeker", "Admin", or "Employer"
    }

}


