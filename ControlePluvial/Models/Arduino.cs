using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ControlePluvial.Models
{
    public class Arduino
    {
        [Key]
        public int IdLora { get; set; }
        public string NomeArd { get; set; }

       // public virtual IEnumerable<Produto> Produtos { get; set; }
    }
}