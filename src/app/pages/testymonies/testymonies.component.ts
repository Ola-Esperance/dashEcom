import { Component, OnInit } from "@angular/core";
import { ShopCommentsService } from "../../feature/shop-comments.service";
import { ToastrService } from "ngx-toastr";
import { ShopComment } from "../../feature/shape/shop-comment";

@Component({
  selector: "app-testymonies",
  templateUrl: "./testymonies.component.html",
  styleUrls: ["./testymonies.component.css"]
})
export class TestymoniesComponent implements OnInit {
  //PAGINATION
  currentPage: number = 1; // Page actuelle
  itemsPerPage: number = 4; // Nombre de catégories par page

  testymonies: Array<any>;

  constructor(
    private testyServce: ShopCommentsService,
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

  showSuccessActivate() {
    this.toastr.success(
      "L'avis a été activé avec succès ! 🎉",
      "Activation Réussie"
    );
  }

  showWarningunActivate() {
    this.toastr.warning(
      "L'avis a été désactivé avec succès ! 🎉",
      "Désactivation Réussie"
    );
  }

  showSuccessCopy() {
    this.toastr.success(
      "L'élément a été copié avec succès ! 📋",
      "Copie Réussie"
    );
  }

  showWarningDelete() {
    this.toastr.warning(
      "L'élément a été supprimé avec succès ! ",
      "Suppression  Réussie"
    );
  }
  // FIN TOASTR SERVICE FONCTION

  read() {
    this.testyServce.read().subscribe((data: any) => {
      this.testymonies = data;
    });
  }

  activeCours(id: any, valeur: boolean) {
    let donnee = {
      active: valeur
    };
    this.testyServce
      .update(id, donnee)
      .then(() => {
        if (valeur) {
          this.showSuccessActivate();
        } else {
          this.showWarningunActivate();
        }
      })
      .catch((err) => {
        console.log("err");
      });
  }

  ondelete(id: string) {
    this.testyServce
      .delete(id)
      .then(() => {
        this.showWarningDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
