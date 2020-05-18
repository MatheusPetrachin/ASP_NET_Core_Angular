using QuickBuy.Dominio.ObjetoValor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public int NumeroEndereco { get; set; }
        public int FormaPagamentoId { get; set; }
        public virtual FormaPagamento FormaPagamento{ get; set; }
        public virtual ICollection<ItemPedido> ItensPedido { get; set; }

        public override void Validate()
        {
            LimparMensagemValidacao();

            if (!ItensPedido.Any())
            {
                AdicionarMensagemValidacao("Erro - Item de pedido não pode ficar vazio!");
            }
            if (string.IsNullOrEmpty(CEP))
            {
                AdicionarMensagemValidacao("Erro - CEP deve ser preenchido!");
            }
            if(FormaPagamentoId == 0)
            {
                AdicionarMensagemValidacao("Não identificamos uma forma de pagamento!");
            }
        }
    }
}
