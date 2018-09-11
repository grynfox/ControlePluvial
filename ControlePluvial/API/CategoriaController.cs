using ControlePluvial.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace ControlePluvial.API
{
    public class CategoriaController : ApiController
    {

        private BancoContext banco;
        public CategoriaController()
        {
            this.banco = new BancoContext();
        }
        [System.Web.Http.HttpPost]
        public void CadastraCategoria([FromBody] Categoria value)
        {
            Categoria cat = new Categoria();
            cat = value;
            banco.Categoria.Add(cat);
            banco.SaveChanges();
        }


        [System.Web.Http.HttpGet]
        public List<Categoria> GetCategoria()
        {
            return this.banco.Categoria.ToList();
        }
        [System.Web.Http.HttpPut]
        public IHttpActionResult AlteraCat(int IdCat, [FromBody] Categoria value) {
            var altCat = banco.Categoria.Where(linha => linha.IdCat == IdCat).FirstOrDefault();
            altCat.NomeCat = value.NomeCat;
            banco.SaveChanges();
            return this.Ok("Alterado");
        }
        [System.Web.Http.HttpDelete]
        public IHttpActionResult ApagaCat(int IdCat)
        {
            var apagaCat = banco.Categoria.FirstOrDefault(linha => linha.IdCat == IdCat);
            banco.Categoria.Remove(apagaCat);
            banco.SaveChanges();
            return null;
        }
    }
}
