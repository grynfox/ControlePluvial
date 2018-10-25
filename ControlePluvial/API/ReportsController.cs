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
        [System.Web.Http.Route("api/reports/getcontapulso")]
        public int GetContaPulso()
        {
            var cont = banco.Reports.Count();
            return cont;
        }
        [System.Web.Http.Route("api/reports/pulsohidrometro")]
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
        [System.Web.Http.Route("api/reports/getreports")]
        public List<Reports> GetReports()
        {
            return this.banco.Reports.ToList();
        }
        [System.Web.Http.Route("api/reports/postpulsosemana")]
        public List<Reports> PostPulsoSemana([FromBody] Reports[] value) {
            DateTime dataPulsoI = new DateTime();
            DateTime dataPulsoF = new DateTime();
            dataPulsoI = value[0].dataPulso;
            dataPulsoF = value[1].dataPulso;
            var contaPulso = banco.Reports.Where(linha => linha.dataPulso >= dataPulsoI && linha.dataPulso <= dataPulsoF );
            return contaPulso.ToList();
        }

        [System.Web.Http.Route("api/reports/getMes")]
        public List<ControlePluvial.API.Single> GetMes([FromUri] DateTime ? mesEAnoValue = null)
        {
            var mesEAno = mesEAnoValue ?? DateTime.Now;
            var graficoPulso = banco.Reports.Where(r =>
                r.dataPulso.Month == mesEAno.Month &&
                r.dataPulso.Year == mesEAno.Year
            ).GroupBy(r => r.dataPulso.Day).Select(grp => new ControlePluvial.API.Single
            {
                Name = grp.Key + "/" + mesEAno.Month + "/" + mesEAno.Year,
                Value = grp.Count()
            }).OrderBy(row => row.Name.ToString()).ToList();
            return graficoPulso;
        }

    }
       
}
