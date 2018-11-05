using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ControlePluvial.Models
{
    public class Reports
    {
       [Key]
        public int codFlux { get; set; }
        public DateTime dataPulso { get; set; }

        [ForeignKey("Arduino")]
        public int IdLora { get; set; }
        public virtual Arduino Arduino { get; set; }

    }
}
