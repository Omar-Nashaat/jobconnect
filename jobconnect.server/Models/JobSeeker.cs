using Jobconnect.Models;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobConnect.Models
{
    public class JobSeeker
    {
        [Key]
        public int JobSeekerID { get; set; }

        [ForeignKey("User")]
        public int UserID { get; set; }

        public User User { get; set; }

        [Required]
        [StringLength(255)]
        public string FullName { get; set; }
    }
}