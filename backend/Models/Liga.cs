using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace backend.Models
{
    [Table("Liga")]
    public class Liga
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("Naziv")]
        public string Naziv { get; set; }

        [Column("N")]
        public int N { get; set; }
        
        [Column("M")]
        public int M { get; set; }

        [Column("KapacitetKluba")]
        public int KapacitetKluba { get ; set; }

        public virtual List<Klub> Klubovi { get ; set; }

    }
}