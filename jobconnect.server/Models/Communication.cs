using JobConnect.Models;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Jobconnect.Models
{
    public class Communication
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CommunicationID { get; set; }

        public int SenderID { get; set; }

        public int RecipientID { get; set; }

        public int ProposalID { get; set; }

        [ForeignKey("SenderID")]
        public virtual User Sender { get; set; }

        [ForeignKey("RecipientID")]
        public virtual User Recipient { get; set; }

        [ForeignKey("ProposalID")]
        public virtual Proposal Proposal { get; set; }

        [Required]
        public string Message { get; set; }

        [Required]
        public DateTime DateTime { get; set; }
    }
}
