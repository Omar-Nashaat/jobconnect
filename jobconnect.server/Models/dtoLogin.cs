using System.ComponentModel.DataAnnotations;
namespace Jobconnect.Models
{

    public class dtoLogin
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}