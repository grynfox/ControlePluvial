﻿using ControlePluvial.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace ControlePluvial.API
{
    public class ArduinoController : ApiController
    {

        private BancoContext banco;
        public ArduinoController()
        {
            this.banco = new BancoContext();
        }
        [System.Web.Http.Route("API/Arduino/CadastraArduino")]
        public void CadastraArduino([FromBody] Arduino value)
        {
            Arduino lora = new Arduino();
            lora = value;
            banco.Arduino.Add(lora);
            banco.SaveChanges();
        }


        [System.Web.Http.Route("API/Arduino/GetArduino")]
        public List<Arduino> GetArduino()
        {
            return this.banco.Arduino.ToList();
        }

        [System.Web.Http.Route("API/Arduino/AlteraArd")]
        [System.Web.Http.HttpPut]
        public IHttpActionResult AlteraArd([FromUri] int IdLora, [FromBody] Arduino value) {
            var altCat = banco.Arduino.Where(linha => linha.IdLora == IdLora).FirstOrDefault();
            altCat.NomeArd = value.NomeArd;
            banco.SaveChanges();
            return this.Ok("Alterado");
        }
        [System.Web.Http.Route("api/arduino/apagaard")]
        [System.Web.Http.HttpDelete]
        public IHttpActionResult ApagaArd(int IdLora)
        {
            var apagaArd = banco.Arduino.FirstOrDefault(linha => linha.IdLora == IdLora);
            banco.Arduino.Remove(apagaArd);
            banco.SaveChanges();
            return null;
        }
    }
}
