import { Component } from "@angular/core";
import { AuthentificationService } from "../../feature/authentification.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent {
  //USER INFORMATIONS

  constructor(
    private loginS: AuthentificationService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  onSubmit(f: any) {
    this.loginS
      .login(f.email, f.password)
      .then(() => {
        this.toastr.success("Connexion réussie");
        this.goHome();
      })
      .catch((err) => {
        this.toastr.error("Email ou Mot de Passe incorect");
      });
  }

  goHome() {
    this.router.navigate(["/home/acceuil"]);
  }
}
