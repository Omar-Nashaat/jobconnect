using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Jobconnect.Models
{
    public class Employer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EmployerID { get; set; }

        [ForeignKey("User")]
        public int UserID { get; set; }

        // Navigation property for the User entity
        public User User { get; set; }

        // Add other employer-specific fields here
    }
}
