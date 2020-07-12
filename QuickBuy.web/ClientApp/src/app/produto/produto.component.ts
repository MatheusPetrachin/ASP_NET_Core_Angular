import { Component, OnInit } from "@angular/core"
import { combineLatest } from "rxjs";
import { Produto } from "../model/produto";
import { ProdutoServico } from "../servico/produto/produto.servico";
import { Router } from "@angular/router";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})

export class ProdutoComponent implements OnInit {

  public produto: Produto;
  public arquivoSelecionado: File;
  public ativar_spinner: boolean = false;
  public mensagem: string;

  constructor(private produtoServico: ProdutoServico, private router: Router) { }

  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.ativadesativaEspera();
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        nomeArquivo => {
          this.produto.nomeArquivo = nomeArquivo;
          this.ativadesativaEspera();
        },
        e => {
          console.log(e.error);
          this.ativadesativaEspera();
        }
      );
  }

  ngOnInit(): void {
    var produtoSession = sessionStorage.getItem('produtoSession');
    if (produtoSession) {
      this.produto = JSON.parse(produtoSession);
    } else {
      this.produto = new Produto();
    }
  }

  public cadastrar() {
    this.ativadesativaEspera();
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
          this.ativadesativaEspera();
          this.router.navigate(["/pesquisar-produto"]);
          sessionStorage.setItem("produtoSession", "");
          this.produto = null;
        },
        e => {
          console.log(e.error);
          this.mensagem = e.error;
          this.ativadesativaEspera();
        }
      );
  }

  public cancelar() {
    sessionStorage.setItem("produtoSession", "");
    this.produto = null;
  }

  public ativadesativaEspera() {
    if (this.ativar_spinner) {
      this.ativar_spinner = false;
    } else {
      this.ativar_spinner = true;
    }
  }


}
