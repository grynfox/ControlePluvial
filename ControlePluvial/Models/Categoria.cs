using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ControlePluvial.Models
{
    public class Categoria
    {
        [Key]
        public int IdCat { get; set; }
        public string NomeCat { get; set; }

        public virtual IEnumerable<Produto> Produtos { get; set; }
    }
}