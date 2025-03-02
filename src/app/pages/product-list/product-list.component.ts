import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../feature/products.service";
import { Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: any;
  //PAGINATION
  currentPage: number = 1; // Page actuelle
  itemsPerPage: number = 4; // Nombre de catégories par page

  constructor(
    private productServce: ProductsService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.read();
  }

  //READ
  read() {
    this.productServce.readAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  ondelete(categoId: string, productId: string) {
    this.productServce
      .deleteProduct(categoId, productId)
      .then(() => {
        this.showWarningDelete();
      })
      .catch((err) => {
        console.log(err);
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

  // FIN TOASTR SERVICE FONCTION
}
