import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { SocialMediaLinksService } from "../../feature/social-media-links.service";
import { ToastrService } from "ngx-toastr";
import { SocialMediaLink } from "../../feature/shape/social-media-link";

@Component({
  selector: "app-social-media",
  templateUrl: "./social-media.component.html",
  styleUrls: ["./social-media.component.css"]
})
export class SocialMediaComponent {
  //VARIABLE
  socialMedias: Observable<Array<any>>;

  formStatus: boolean;

  //TWO WAY BIDING
  socialId: string;
  socialName: string;
  socialLink: string;
  socialImgLink: string;

  constructor(
    private socialServce: SocialMediaLinksService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.read();
  }

  //TOASTR SERVICE FONCTION

  showSuccessAdd() {
    this.toastr.success(
      "L'élément a été ajouté avec succès ! 🎉",
      "Ajout Réussi"
    );
  }

  showSuccessUpdate() {
    this.toastr.success(
      "Mise à jour réussie ! Vos modifications ont été enregistrées.",
      "Mise à Jour Réussie"
    );
  }

  showWarningDelete() {
    this.toastr.warning(
      "L'élément a été supprimé avec succès ! ",
      "Suppression  Réussie"
    );
  }
  // FIN TOASTR SERVICE FONCTION

  //READ BANNER
  read() {
    this.socialMedias = this.socialServce.read();
  }

  //Formulair de Soumission
  onSubmit(formValue: any) {
    let data: SocialMediaLink = {
      socialMediaName: formValue.value.socialMediaName,
      socialMediaImgLink: formValue.value.socialMediaImgLink,
      socialMediaLink: formValue.value.socialMediaLink
    };

    if (this.formStatus) {
      this.socialServce
        .update(this.socialId, data)
        .then(() => {
          this.showSuccessUpdate();
          formValue.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.socialServce
        .create(data)
        .then(() => {
          this.showSuccessAdd();
          formValue.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //Formulair pour Editer
  onEdit(name: string, imgLink: string, link: string, id: string) {
    this.socialName = name;
    this.socialImgLink = imgLink;
    this.socialLink = link;
    this.socialId = id;
    this.formStatus = true;

    // Faire défiler vers l'input
    const inputElement = document.getElementById("nom");
    if (inputElement) {
      inputElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Faire défiler vers l'input
      inputElement.focus(); // Mettre le focus sur l'input
    }
  }

  onDelete(id: string) {
    this.socialServce
      .delete(id)
      .then(() => {
        this.showWarningDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
