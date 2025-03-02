import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BannieresService } from "../../feature/bannieres.service";
import { Banniere } from "../../feature/shape/banniere";

@Component({
  selector: "app-img-carousel",
  templateUrl: "./img-carousel.component.html",
  styleUrls: ["./img-carousel.component.css"]
})
export class ImgCarouselComponent implements OnInit {
  //VARIABLE
  banners: Observable<Array<any>>;

  //GERER LE STATUT DU FORMULAIRE
  formStatus: boolean = false;

  //DIRECTIVE BI DIRECTIONNEL TWO WAY DATA BIDIN
  bannersCategory: string;
  bannersLink: string = "";
  bannerId: string;

  constructor(private bannerServce: BannieresService) {}

  ngOnInit() {
    this.readBanner();
  }

  //READ BANNER
  readBanner() {
    this.banners = this.bannerServce.read();
  }

  //Formulair de Soumission
  onSubmit(formValue: any) {
    let bannerData: Banniere = {
      imgLink: formValue.value.imgLink,
      categorie: formValue.value.titre
    };

    if (this.formStatus) {
      this.bannerServce
        .update(this.bannerId, bannerData)
        .then(() => {
          console.log("updated succesfully");
          formValue.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //Formulair pour Editer
  onEdit(categorie: string, imgLink: string, id: string) {
    this.bannersCategory = categorie;
    this.bannersLink = imgLink;
    this.bannerId = id;
    this.formStatus = true;

    // Faire défiler vers l'input
    const inputElement = document.getElementById("nom");
    if (inputElement) {
      inputElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Faire défiler vers l'input
      inputElement.focus(); // Mettre le focus sur l'input
    }
  }
}
