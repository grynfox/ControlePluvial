using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ControlePluvial.Models
{
    public class Reports
    {
       [Key]
        public int codFlux { get; set; }
        public DateTime data { get; set; }

    }
}
