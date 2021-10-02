using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LigaController : ControllerBase
    {
        public LigaContext Context {get;set;}

        public LigaController(LigaContext context)
        {           
            Context = context;
        }        

        [Route("PreuzmiLige")]
        [HttpGet]
        public async Task <List<Liga>> PreuzmiLige()
        {
            return await Context.Lige.Include(p=>p.Klubovi).ThenInclude(p=>p.Igraci).ToListAsync();
        }

        [Route("UpisiLigu")]
        [HttpPost]
        public async Task UpisiLigu([FromBody] Liga liga)
        {
            Context.Lige.Add(liga);
            await Context.SaveChangesAsync();
        }

        [Route("IzmeniLigu")]
        [HttpPut]
        public async Task IzmeniVrt([FromBody]Liga liga)
        {
            Context.Update<Liga>(liga);
            await Context.SaveChangesAsync();
        }
        [Route("IzbrisiLigu")]
        [HttpDelete]
        public async Task IzbrisiLigu(int id)
        {
            var liga=await Context.Lige.FindAsync(id);
            Context.Remove(liga);
            await Context.SaveChangesAsync();
        }

        [Route("UpisiKlub/{id}")]
        [HttpPost]
        public async Task UpisiKlub(int id,[FromBody] Klub klub)
        {
            var liga =await Context.Lige.FindAsync(id);

            klub.Liga= liga;

            Context.Klubovi.Add(klub);
            await Context.SaveChangesAsync();
        }
        
        [Route("IzmeniKlub")]
        [HttpPut]
        public async Task IzmeniKlub([FromBody]Klub klub)
        {
            Context.Update<Klub>(klub);
            await Context.SaveChangesAsync();
        }



        [Route("IzbrisiKlub")]
        [HttpDelete]
        public async Task IzbrisiKlub(int id)
        {
            var klub=await Context.Klubovi.FindAsync(id);
            Context.Remove(klub);
            await Context.SaveChangesAsync();
        }

        [Route("UpisiIgraca/{id}")]
        [HttpPost]
        public async Task UpisiIgraca(int id,[FromBody] Igrac igrac)
        {
            var klub =await Context.Klubovi.FindAsync(id);
            igrac.Klubref = klub;
            Context.Igraci.Add(igrac);
            await Context.SaveChangesAsync();
        }

        [Route("IzbrisiIgraca/{id}")]
        [HttpDelete]
        public async Task IzbrisiIgraca(int id)
        {
            var igrac=await Context.Igraci.FindAsync(id);
            Context.Remove(igrac);
            await Context.SaveChangesAsync();
        }
        [Route("IzmeniIgraca")]
        [HttpPut]
        public async Task IzmeniIgraca([FromBody]Igrac igrac)
        {
            Context.Update<Igrac>(igrac);
            await Context.SaveChangesAsync();
        }






    }
}
