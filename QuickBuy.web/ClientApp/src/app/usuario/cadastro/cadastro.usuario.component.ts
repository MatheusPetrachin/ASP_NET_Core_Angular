import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { UsuarioServico } from "../../servico/usuario/usuario.servico";

@Component({
  selector: "cadastro-usuario",
  template: "./cadastro.usuario.component.html",
  styleUrls: ["./cadastro.usuario.component.css"]
})
export class CadastroUsuarioComponent implements OnInit {

  public usuario: Usuario;

  constructor(
    private usuarioServico: UsuarioServico
  ) { };

  ngOnInit(): void {
    this.usuario = new Usuario;
  }

  public cadastrar() {
    this.usuarioServico.cadastrarUsuario(this.usuario)
      .subscribe(
        usuario => {

        },
        e => {

        }
      );
  }


}
