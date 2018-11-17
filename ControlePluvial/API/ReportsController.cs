using ControlePluvial.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace ControlePluvial.API
{
    public class ReportsController : ApiController
    {
        private const string formatoData = "dd/MM/yyyy";
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

            return this.banco.Reports.OrderByDescending(row => row.dataPulso).ToList();
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
        [System.Web.Http.Route("api/reports/GetHoraDiaTotal")]
        public List<Single> GetHoraDiaTotal([FromUri] DateTime mesEAnoValue)
        {
            var mesEAno = mesEAnoValue;
            var graficoPulso = banco.Reports.Where(linha =>
                linha.dataPulso.Month == mesEAno.Month &&
                linha.dataPulso.Year == mesEAno.Year
            ).Where(linha => linha.dataPulso.Day == mesEAno.Day).AsEnumerable().
            GroupBy(linha => linha.dataPulso.Hour.ToString().PadLeft(2,'0') + "H | " 
            + mesEAno.Day.ToString().PadLeft(2, '0') + "/" +
            mesEAno.Month.ToString().PadLeft(2,'0')).Select(grp => new Single
            {
                Name = grp.Key,  
                Value = grp.Count()
            }).OrderBy(row => row.Name).ToList();
            return graficoPulso;
        }
        [System.Web.Http.Route("api/reports/GetHoraDiaDisp")]
        public List<Single> GetHoraDiaDisp(int IdLora, [FromUri] DateTime mesEAnoV)
        {
            var mesEAno = mesEAnoV;
            var graficoPulso = banco.Reports.Where(linha =>
                linha.IdLora == IdLora &&
                linha.dataPulso.Month == mesEAno.Month &&
                linha.dataPulso.Year == mesEAno.Year
            ).Where(linha => linha.dataPulso.Day == mesEAno.Day).AsEnumerable().
            GroupBy(linha => linha.dataPulso.Hour.ToString().PadLeft(2, '0') + "H | "
            + mesEAno.Day.ToString().PadLeft(2, '0') + "/" +
            mesEAno.Month.ToString().PadLeft(2, '0')).Select(grp => new Single
            {
                Name = grp.Key,
                Value = grp.Count()
            }).OrderBy(row => row.Name).ToList();
            return graficoPulso;
        }
        [System.Web.Http.Route("api/reports/getMes")]
        public List<Single> GetMes([FromUri] DateTime ? mesEAnoValue = null)
        {
            var mesEAno = mesEAnoValue ?? DateTime.Now;
            var graficoPulso = banco.Reports.Where(linha =>
                linha.dataPulso.Month == mesEAno.Month &&
                linha.dataPulso.Year == mesEAno.Year
            ).GroupBy(linha => linha.dataPulso.Day).AsEnumerable().
            Select(grp => new Single
            {           
                Name = grp.Key.ToString().PadLeft(2, '0') + "/" + mesEAno.Month + "/" + mesEAno.Year,
                Value = grp.Count()
            }).OrderBy(row => row.Name).ToList();
            return graficoPulso;
        }

        [System.Web.Http.Route("api/reports/GetMesMonth")]
        public List<Single> GetMesMonth([FromUri] DateTime? mesEAnoValue = null)
        {
            var mesEAno = mesEAnoValue ?? DateTime.Now;
            var graficoPulso = banco.Reports.
                GroupBy(linha => linha.dataPulso.Month ).AsEnumerable().Select(grp => new Single
            {
                Name = grp.Key.ToString().PadLeft(2, '0') + "/" + mesEAno.Year,
                Value = grp.Count()
            }).OrderBy(row => row.Name).ToList();
            return graficoPulso;
        }


        [System.Web.Http.Route("api/reports/getmesdata")]
        public List<Single> GetMesData([FromUri] DateTime dataPulsoInicio, [FromUri] DateTime dataPulsoFinal)
        {
            
            var graficoPulso = banco.Reports.Where(linha => dataPulsoInicio.Day <= linha.dataPulso.Day && 
            dataPulsoInicio.Month <= linha.dataPulso.Month && dataPulsoInicio.Year <= linha.dataPulso.Year &&
            dataPulsoFinal.Day >= linha.dataPulso.Day && dataPulsoFinal.Month >= 
            linha.dataPulso.Month && dataPulsoFinal.Year >= linha.dataPulso.Year).AsEnumerable().
                GroupBy(linha => linha.dataPulso.Day + "/" + linha.dataPulso.Month.ToString().PadLeft(2, '0') + "/" + linha.dataPulso.Year).
                Select(grp => new Single
            {
                Name = grp.Key.ToString().PadLeft(10, '0'),
                Value = grp.Count()
            }).OrderBy(row => row.Name.ToString()).ToList();
            return graficoPulso;
        }

        [System.Web.Http.Route("api/reports/getpulsoidlora")]
        public IEnumerable<Reports> GetPulsoIdLora(int IdLora)
        {
            var tmp = this.banco.Reports.Where(linha => linha.Arduino.IdLora == IdLora).ToList();

            return tmp.OrderByDescending(row => row.dataPulso);
        }
        [System.Web.Http.Route("api/reports/getmesdisp")]
        public List<Single> GetMesDisp(int IdLora, [FromUri] DateTime? mesEAnoValue = null)
        {
            var mesEAno = mesEAnoValue ?? DateTime.Now;
            var graficoPulso = banco.Reports.Where(linha =>
                linha.IdLora == IdLora &&
                linha.dataPulso.Month == mesEAno.Month &&
                linha.dataPulso.Year == mesEAno.Year
            ).GroupBy(linha => linha.dataPulso.Day).AsEnumerable().Select(grp => new Single
            {
                Name = grp.Key.ToString().PadLeft(2, '0') + "/" + mesEAno.Month + "/" + mesEAno.Year,
                Value = grp.Count()
            }).OrderBy(row => row.Name.ToString()).ToList();
            return graficoPulso;
        }

    }
       
}
