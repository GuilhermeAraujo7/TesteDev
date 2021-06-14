using System.Collections.Generic;
using System.Threading.Tasks;
using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    public class UsuariosController : ControllerBase {
        private readonly Contexto _contexto;

        public UsuariosController (Contexto contexto) {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> ListarUsuariosAsync () {
            return await _contexto.Usuarios.ToListAsync ();
        }

        [HttpGet ("{Id}")]
        public async Task<ActionResult<Usuario>> FiltrarUsuarioPeloIdAsync (int Id) {
            Usuario usuario = await _contexto.Usuarios.FindAsync (Id);

            if (usuario == null)
                return NotFound ();

            return usuario;
        }

        [HttpPost]
        public async Task<ActionResult<Usuario>> criarUsuarioioAsync (Usuario usuario) {
            await _contexto.Usuarios.AddAsync (usuario);
            await _contexto.SaveChangesAsync ();

            return Ok ();
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarUsuarioAsync (Usuario usuario) {
            _contexto.Usuarios.Update (usuario);
            await _contexto.SaveChangesAsync ();

            return Ok ();
        }

    }
}