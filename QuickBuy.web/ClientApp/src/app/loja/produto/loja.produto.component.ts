import { Component, OnInit } from "@angular/core";
import { ProdutoServico } from "../../servico/produto/produto.servico";
import { Produto } from "../../model/produto";
import { Router } from "@angular/router";
import { LojaCarrinhoCompras } from "../carrinho/loja.carrinho.component";

@Component({
  selector: "loja-app-produto",
  templateUrl: "./loja.produto.component.html",
  styleUrls: ["./loja.produto.component.css"]
})
export class LojaProdutoComponent implements OnInit {

  public produto: Produto;
  public carrinhoCompras: LojaCarrinhoCompras;

  constructor(private produtoServico: ProdutoServico, private router: Router) {

  }

  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();
    var produtoDetalhe = sessionStorage.getItem('produtoDetalhe');
    if (produtoDetalhe) {
      this.produto = JSON.parse(produtoDetalhe);
    }
  }

  public comprar() {
    this.carrinhoCompras.adicionar(this.produto);
    this.router.navigate(["/loja-efetivar"]);
  }

}
