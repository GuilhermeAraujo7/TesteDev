using System.Collections.Generic;
using System.Threading.Tasks;
using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    public class ClientesController : ControllerBase {
        private readonly Contexto _contexto;

        public ClientesController (Contexto contexto) {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cliente>>> ListarClientesAsync () {
            return await _contexto.Clientes.ToListAsync ();
        }

        [HttpGet ("{Id}")]
        public async Task<ActionResult<Cliente>> FiltrarPeloIdAsync (int Id) {
            Cliente cliente = await _contexto.Clientes.FindAsync (Id);

            if (cliente == null)
                return NotFound ();

            return cliente;
        }

        [HttpGet ("{cpf}")]
        public async Task<ActionResult<Cliente>> FiltrarPeloCpfAsync (string cpf) {
            Cliente cliente = await _contexto.Clientes.FindAsync (cpf);

            if (cliente == null)
                return NotFound ();

            return cliente;
        }

        [HttpPost]
        public async Task<ActionResult<Cliente>> InserirClienteAsync (Cliente cliente) {
            await _contexto.Clientes.AddAsync (cliente);
            await _contexto.SaveChangesAsync ();

            return Ok ();
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarClienteAsync (Cliente cliente) {
            _contexto.Clientes.Update (cliente);
            await _contexto.SaveChangesAsync ();

            return Ok ();
        }

    }
}