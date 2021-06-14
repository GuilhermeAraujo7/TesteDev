using System.Collections.Generic;
using System.Threading.Tasks;
using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    public class TelefonesController : ControllerBase {
        private readonly Contexto _contexto;

        public TelefonesController (Contexto contexto) {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Telefone>>> ListarTelefonesAsync () {
            return await _contexto.Telefones.ToListAsync ();
        }

        [HttpGet ("{numero}")]
        public async Task<ActionResult<Telefone>> FiltrarPeloNumeroAsync (string numero) {
            Telefone telefone = await _contexto.Telefones.FindAsync (numero);

            if (telefone == null)
                return NotFound ();

            return telefone;
        }

        [HttpPost]
        public async Task<ActionResult<Telefone>> InserirTelefoneAsync (Telefone telefone) {
            await _contexto.Telefones.AddAsync (telefone);
            await _contexto.SaveChangesAsync ();

            return Ok ();
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarTelefoneAsync (Telefone telefone) {
            _contexto.Telefones.Update (telefone);
            await _contexto.SaveChangesAsync ();

            return Ok ();
        }

    }
}