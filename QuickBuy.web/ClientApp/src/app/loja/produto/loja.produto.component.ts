import { Component, OnInit } from "@angular/core";
import { ProdutoServico } from "../../servico/produto/produto.servico";

@Component({
  selector: "loja-app-produto",
  templateUrl: "./loja.produto.component.html",
  styleUrls: ["./loja.produto.component.css"]
})
export class LojaProdutoComponent implements OnInit {

  constructor(private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
        
    }

}
