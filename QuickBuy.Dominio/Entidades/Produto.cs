using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Descricao { get; set; }
        public decimal Preco{ get; set; }
        public string NomeArquivo { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Name))
            {
                AdicionarMensagemValidacao("Nome do produto não foi informado");
            }
            if (string.IsNullOrEmpty(Descricao))
            {
                AdicionarMensagemValidacao("Descrição não foi informada");
            }
        }
    }
}
