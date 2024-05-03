using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobConnect.Models
{
    public class Proposal
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProposalID { get; set; }

        public int JobID { get; set; }

        public int JobSeekerID { get; set; }

        [Required]
        public string CV { get; set; }

        [Required]
        public DateTime SubmissionDate { get; set; }

        [Required]
        public ProposalStatus Status { get; set; }

        [ForeignKey("JobID")]
        public virtual Job Job { get; set; }

        [ForeignKey("JobSeekerID")]
        public virtual JobSeeker JobSeeker { get; set; }
    }

    public enum ProposalStatus
    {
        Pending,
        Accepted,
        Rejected
    }
}
