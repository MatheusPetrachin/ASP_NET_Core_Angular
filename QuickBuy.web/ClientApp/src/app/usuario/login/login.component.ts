import { Component } from "@angular/core";
import { Usuario } from "../../model/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {

  public usuario;
  public usuarioAutenticado: boolean;

  constructor() {
    this.usuario = new Usuario();
  }

  entrar() {
    if (this.usuario.email == "mpetrachin@hdlao.com" && this.usuario.password == "testex") {
      this.usuarioAutenticado = true;
    }
  }

}
