using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {
        }

        public Usuario Obter(string email, string password)
        {
            return QuickBuyContext.Usuarios.FirstOrDefault(u => u.Email == email && u.Password == password);
        }

        public Usuario Obter(string email)
        {
            return QuickBuyContext.Usuarios.FirstOrDefault(u => u.Email == email);
        }
    }
}
