import { Component } from "@angular/core";
import { ImagesService } from "../../feature/images.service";
import { Observable } from "rxjs";
import { LogoService } from "../../feature/logo.service";
import { ToastrService } from "ngx-toastr";
import { Logo } from "../../feature/shape/logo";

@Component({
  selector: "app-logo",
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.css"]
})
export class LogoComponent {
  // selectedFile: File;
  // imageUrl: string;

  //VARIABLE
  logoLink: Observable<Array<any>>;

  formStatus: boolean;

  //TWO WAY BIDING
  logoId: string;
  logoLien: string;

  constructor(private logoServce: LogoService, private toastr: ToastrService) {}

  ngOnInit() {
    this.read();
  }

  //TOASTR SERVICE FONCTION

  showSuccessUpdate() {
    this.toastr.success(
      "Mise à jour réussie ! Vos modifications ont été enregistrées.",
      "Mise à Jour Réussie"
    );
  }

  // FIN TOASTR SERVICE FONCTION

  //READ BANNER
  read() {
    this.logoLink = this.logoServce.read();
  }

  //Formulair de Soumission
  onSubmit(formValue: any) {
    let data: Logo = {
      logoLink: formValue.value.logoLink
    };

    if (this.formStatus) {
      this.logoServce
        .update(this.logoId, data)
        .then(() => {
          this.showSuccessUpdate();
          formValue.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //Formulair pour Editer
  onEdit(link: string, id: string) {
    this.logoLien = link;
    this.logoId = id;

    this.formStatus = true;

    // Faire défiler vers l'input
    const inputElement = document.getElementById("basic-url");
    if (inputElement) {
      inputElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Faire défiler vers l'input
      inputElement.focus(); // Mettre le focus sur l'input
    }
  }

  /*  constructor(private storageService: ImagesService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {} */
}
