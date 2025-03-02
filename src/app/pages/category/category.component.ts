import { Component } from "@angular/core";
import { CategoriesService } from "../../feature/categories.service";

import { Category } from "../../feature/shape/category";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent {
  // VARIABLES
  //categories: Observable<Array<any>>;
  //categories: Array<object>;
  categories: any[];
  //categories: Category[] = [];
  //PAGINATION
  currentPage: number = 1; // Page actuelle
  itemsPerPage: number = 4; // Nombre de catégories par page

  //TWO WAY DATA BIDING VARIABLES
  categoNom: string;
  categoIdentifiant: string;

  //FORM STATUT
  formStatut: boolean = false;

  constructor(
    private categoServ: CategoriesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.read();
  }

  //READ
  read() {
    this.categoServ.readCategory().subscribe((data) => {
      this.categories = data;
    });
  }

  onSubmit(categorie: any) {
    let categories: Category = {
      category: categorie.value.categorie
    };
    if (this.formStatut) {
      this.categoServ
        .updateCategory(this.categoIdentifiant, categories)
        .then(() => {
          this.showSuccessUpdate();
          categorie.reset();
          this.formStatut = false;
        })
        .catch((err) => {
          this.toastr.error("Erreur");
        });
    } else {
      this.categoServ
        .createCategory(categories)
        .then(() => {
          this.showSuccessAdd();
          categorie.reset();
        })
        .catch((err) => {
          this.toastr.error("Erreur");
        });
    }
  }

  //Fonction pour Editer
  onEdit(categoName: string, categoId: string) {
    this.categoNom = categoName;
    this.categoIdentifiant = categoId;
    this.formStatut = true;

    // Faire défiler vers l'input
    const inputElement = document.getElementById("basic-url");
    if (inputElement) {
      inputElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Faire défiler vers l'input
      inputElement.focus(); // Mettre le focus sur l'input
    }
  }

  //Fonction pour Supprimer
  onDelette(categoId: string) {
    this.categoServ
      .deleteCategory(categoId)
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
      "Une Catégorie a été ajouté avec succès ! 🎉",
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
      "Une Catégorie a été supprimé avec succès ! ",
      "Suppression  Réussie"
    );
  }

  // FIN TOASTR SERVICE FONCTION
}
