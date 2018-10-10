using ControlePluvial.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace ControlePluvial.API
{
    public class ReportsController : ApiController
    {
        private BancoContext banco;
        public ReportsController()
        {
            this.banco = new BancoContext();
        }
        [System.Web.Http.HttpPost]
        public void PulsoHidrometro([FromBody] Reports value)
        {
            DateTime dataPulso = new DateTime();
            Reports pulso = new Reports();
            dataPulso = DateTime.Now;
            pulso = value;
            pulso.dataPulso = dataPulso;
            banco.Reports.Add(pulso);
            banco.SaveChanges();
        }
        [System.Web.Http.HttpGet]
        public List<Reports> GetReports()
        {
            return this.banco.Reports.ToList();
        }

    }
       
}
