using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ControlePluvial.Models
{
    public class Produto
    {
        [Key]
        public int IdProd { get; set; }
        public string NomeProd { get; set; }

        [ForeignKey("Categoria")]
        public int IdCat { get; set; }
        public virtual Arduino Categoria { get; set; }
    }
}