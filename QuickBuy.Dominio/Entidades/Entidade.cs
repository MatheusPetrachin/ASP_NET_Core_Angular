using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        public List<string> _mensagensValidacao { get; set; }
        private List<string> mensagemValidacao
        {
            get { return _mensagensValidacao ?? (_mensagensValidacao = new List<string>()); }
        }
        protected void LimparMensagemValidacao()
        {
            mensagemValidacao.Clear();
        }
        protected void AdicionarMensagemValidacao(string msgn)
        {
            mensagemValidacao.Add(msgn);
        }

        public abstract void Validate();
        protected bool EhValido
        {
            get { return !mensagemValidacao.Any(); }
        }

    }
}
