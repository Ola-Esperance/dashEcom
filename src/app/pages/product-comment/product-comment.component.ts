import { Component, OnInit } from "@angular/core";
import { ProductCommentsService } from "../../feature/product-comments.service";
import { ToastrService } from "ngx-toastr";
import { DataCategoProductService } from "../../feature/data-catego-product.service";

@Component({
  selector: "app-product-comment",
  templateUrl: "./product-comment.component.html",
  styleUrls: ["./product-comment.component.css"]
})
export class ProductCommentComponent implements OnInit {
  //PAGINATION
  currentPage: number = 1; // Page actuelle
  itemsPerPage: number = 4; // Nombre de catégories par page

  comments: Array<any>;

  constructor(
    private commentServce: ProductCommentsService,
    private dataCategoProductSvce: DataCategoProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.read();
  }

  read() {
    this.commentServce.readAll().subscribe((data: any) => {
      this.comments = data;
    });
  }

  ondelete(categoryId: string, productId: string, productCommentId: string) {
    this.commentServce
      .delete(categoryId, productId, productCommentId)
      .then(() => {
        this.showWarningDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //ACTIVATATION DU COMMENTAIRE
  activeCours(
    categoryId: string,
    productId: string,
    productCommentId: string,

    valeur: boolean
  ) {
    let donnee = {
      activated: valeur
    };
    this.commentServce
      .update(categoryId, productId, productCommentId, donnee)
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

  //TOASTR SERVICE FONCTION
  showSuccessAdd() {
    this.toastr.success(
      "Le Produit a été ajouté avec succès ! 🎉",
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
      "Le Produit a été supprimé avec succès ! ",
      "Suppression  Réussie"
    );
  }

  showSuccessActivate() {
    this.toastr.success(
      "Le commentaire a été activé avec succès ! 🎉",
      "Activation Réussie"
    );
  }

  showWarningunActivate() {
    this.toastr.warning(
      "Le commentaire a été désactivé avec succès ! 🎉",
      "Désactivation Réussie"
    );
  }
  // FIN TOASTR SERVICE FONCTION
}
