using System.ComponentModel.DataAnnotations;

namespace JobConnect.DTOs
{
    public class LoginDto
    {
        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        [Required(ErrorMessage = "password is required")]

        public string Password { get; set; }

    }
}
