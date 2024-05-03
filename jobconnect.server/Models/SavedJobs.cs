using JobConnect.Models;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Jobconnect.Models
{
    public class SavedJobs
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SavedJobID { get; set; }

        public int JobID { get; set; }

        public int JobSeekerID { get; set; }

        [ForeignKey("JobID")]
        public virtual Job Job { get; set; }

        [ForeignKey("JobSeekerID")]
        public virtual User JobSeeker { get; set; }
    }
}
