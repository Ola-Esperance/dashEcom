import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ShippingsService } from "../../feature/shippings.service";
import { Shipping } from "../../feature/shape/shipping";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent implements OnInit {
  //VARIABLE
  shippings: Observable<Array<any>>;

  formStatus: boolean;

  //TWO WAY BIDING
  shippingId: string;
  shippingTitle: string;
  shippingIconLink: string;
  shippingDescription: string;

  constructor(
    private shippingServce: ShippingsService,
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

  showSuccessCopy() {
    this.toastr.success(
      "L'élément a été copié avec succès ! 📋",
      "Copie Réussie"
    );
  }
  // FIN TOASTR SERVICE FONCTION

  //READ BANNER
  read() {
    this.shippings = this.shippingServce.read();
  }

  //Formulair de Soumission
  onSubmit(formValue: any) {
    let shippingData: Shipping = {
      imgLink: formValue.value.imgLink,
      title: formValue.value.title,
      description: formValue.value.description
    };

    if (this.formStatus) {
      this.shippingServce
        .update(this.shippingId, shippingData)
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
  onEdit(title: string, imgLink: string, decription: string, id: string) {
    this.shippingTitle = title;
    this.shippingIconLink = imgLink;
    this.shippingDescription = decription;
    this.shippingId = id;
    this.formStatus = true;

    // Faire défiler vers l'input
    const inputElement = document.getElementById("nom");
    if (inputElement) {
      inputElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Faire défiler vers l'input
      inputElement.focus(); // Mettre le focus sur l'input
    }
  }
}
