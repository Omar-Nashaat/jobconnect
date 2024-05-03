using Jobconnect.Models;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobConnect.Models
{
    public class Job
    {
        [Key]
        public int JobID { get; set; }

        [ForeignKey("Employer")]
        public int EmployerID { get; set; }

        public Employer Employer { get; set; }

        [Required]
        [StringLength(255)]
        public string Title { get; set; }

        public string Description { get; set; }

        [EnumDataType(typeof(JobType))]
        public JobType JobType { get; set; }


        [Required]
        public DateTime CreationDate { get; set; }

        [StringLength(255)]
        public string Location { get; set; }

        [StringLength(255)]
        public string Industry { get; set; }

        [StringLength(255)]
        public string SalaryRange { get; set; }

        [EnumDataType(typeof(JobStatus))]
        public JobStatus Status { get; set; }
    }

    public enum JobType
    {
        PartTime,
        FullTime,
        Remote
    }

    public enum JobStatus
    {
        Pending,
        Accepted,
        Rejected
    }
}
