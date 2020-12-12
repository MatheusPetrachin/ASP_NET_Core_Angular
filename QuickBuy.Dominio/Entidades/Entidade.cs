﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> _mensagensValidacao { get; set; }
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

        public string ObterMensagensValidacao()
        {
            return string.Join(". ", mensagemValidacao);
        }

        public abstract void Validate();
        public bool EhValido
        {
            get { return !mensagemValidacao.Any(); }
        }

    }
}