import { Component, OnInit } from "@angular/core"
import { combineLatest } from "rxjs";
import { Produto } from "../model/produto";
import { ProdutoServico } from "../servico/produto/produto.servico";

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

  constructor(private produtoServico: ProdutoServico) { }

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
    this.produto = new Produto();
  }

  public cadastrar() {
    this.ativadesativaEspera();
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
          this.ativadesativaEspera();

        },
        e => {
          console.log(e.error);
          this.mensagem = e.error;
          this.ativadesativaEspera();
        }
      );
  }

  public ativadesativaEspera() {
    if (this.ativar_spinner) {
      this.ativar_spinner = false;
    } else {
      this.ativar_spinner = true;
    }
  }


}
