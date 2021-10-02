using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace backend.Models
{
    [Table("Klub")]
    public class Klub
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("X")]
        public int X { get; set; }

        [Column("Y")]
        public int Y { get; set; }

        [Column("Kapacitet")]
        public int Kapacitet { get; set; }

        [Column("MaxKapacitet")]
        public int MaxKapacitet { get; set; }

        [Column("Ime")]
        public string Ime { get; set; }

        public virtual List<Igrac> Igraci { get ; set; }

        [JsonIgnore]
        public Liga Liga {get;set;}
    }
}