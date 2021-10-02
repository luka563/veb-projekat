using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace backend.Models
{
    [Table("Igrac")]
    public class Igrac
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("Ime")]
        public string Ime { get; set; }

        [Column("Dres")]
        public int Dres { get; set; }

        [Column("Klub")]
        public string Klub { get; set; }

        [JsonIgnore]
        public Klub Klubref {get;set;}


    }
}