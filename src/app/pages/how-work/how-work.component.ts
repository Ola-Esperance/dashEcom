import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { HowWorkService } from "../../feature/how-work.service";
import { HowWork } from "../../feature/shape/how-work";

@Component({
  selector: "app-how-work",
  templateUrl: "./how-work.component.html",
  styleUrls: ["./how-work.component.css"]
})
export class HowWorkComponent {
  //VARIABLE
  howWorks: Observable<Array<any>>;

  formStatus: boolean;

  //TWO WAY BIDING
  howWorkId: string;
  howWorkTitle: string;
  howWorkContent: string;

  constructor(
    private workServce: HowWorkService,
    private toastr: ToastrService
  ) {}

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
    this.howWorks = this.workServce.read();
  }

  //Formulair de Soumission
  onSubmit(formValue: any) {
    let data: HowWork = {
      title: formValue.value.title,
      description: formValue.value.description
    };

    if (this.formStatus) {
      this.workServce
        .update(this.howWorkId, data)
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
  onEdit(title: string, content: string, id: string) {
    this.howWorkTitle = title;
    this.howWorkContent = content;
    this.howWorkId = id;

    this.formStatus = true;

    // Faire défiler vers l'input
    const inputElement = document.getElementById("basic-url");
    if (inputElement) {
      inputElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Faire défiler vers l'input
      inputElement.focus(); // Mettre le focus sur l'input
    }
  }
}
