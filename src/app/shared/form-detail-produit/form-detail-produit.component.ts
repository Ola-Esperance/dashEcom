import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Product } from "../../feature/shape/product";
import { ProductsService } from "../../feature/products.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoriesService } from "../../feature/categories.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-form-detail-produit",
  templateUrl: "./form-detail-produit.component.html",
  styleUrls: ["./form-detail-produit.component.css"]
})
export class FormDetailProduitComponent implements OnInit {
  //liste Category Read variable
  categories: Observable<Array<any>>;

  //TWO WAY DATA BIDING
  productId: string;
  productTitle: string;
  //lIEN PERMANENT QUI VA S'AUTO REMPLIR
  permaLink: string = "";
  productImage: string;
  productVideo: string;
  categoryProduct: string;
  categoryId: string;
  productPrice: number;
  achatLien: string;

  viewProduct: number;

  shortDescriptione: string;
  produitDescription: string;

  createdAt: Date;

  //FORM VAR
  editForm: FormGroup;

  //PRODUITS
  produits: Observable<Array<any>>;
  valider: boolean = false;

  constructor(
    private fb: FormBuilder,
    private produitService: ProductsService,
    private categoServce: CategoriesService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  //ACTION AUTOMATISÉ
  ngOnInit() {
    //LIRE CATEGORIE
    this.categories = this.categoServce.readCategory();
    //RECEPTION DES PARAMETTRE DE l'URL
    this.route.queryParams.subscribe((val: any) => {
      this.productId = val.id;
      this.productTitle = val.title;
      this.permaLink = val.permaLink;
      this.categoryId = val.categoryId;
      this.categoryProduct = val.categoryName;

      this.productImage = val.imgLink;
      this.productVideo = val.videoLink;
      this.productPrice = val.price;
      this.achatLien = val.buyLink;
      this.shortDescriptione = val.shortDescription;
      this.produitDescription = val.description;
    });
    //VERIFIER SI L'ID EST ENVOYE DIRECTEMENT VIA URL
    if (this.productId) {
      this.initEdit();
      this.valider = true;
    } else {
      this.initAddForm();
      this.valider = false;
    }
  }

  //FONCTION PARTIE: Cette partie concerne les différentes fonctions à crer

  //FONCTION POUR GESTION AUTOMATIQUE DE PERMALINK
  onTitle($e: any) {
    const title = $e.target.value;
    this.permaLink = title.trim().toLowerCase().replace(/\s/g, "-");
    // Mettez à jour le champ lienPermanent dans le formulaire
    this.editForm.get("lienPermanent")?.setValue(this.permaLink);
  }

  //FONCTION POUR CRER UN PRODUIT
  initAddForm() {
    this.editForm = this.fb.group({
      titre: ["", Validators.required],
      lienPermanent: [{ value: "", disabled: true }, Validators.required],
      categorieId: ["", Validators.required],
      lienImg: ["", Validators.required],
      lienVideo: ["", Validators.required],

      prix: ["", Validators.required],
      lienAchat: ["", Validators.required],
      miniDescription: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  //FONCTION POUR MODIFIER UN PRODUIT
  initEdit() {
    this.editForm = this.fb.group({
      titre: [this.productTitle, Validators.required],
      lienPermanent: [
        { value: this.permaLink, disabled: true },
        Validators.required
      ],
      categorieId: [
        `${this.categoryId}-${this.categoryProduct}`,
        Validators.required
      ],
      lienImg: [this.productImage, Validators.required],
      lienVideo: [this.productVideo, Validators.required],

      prix: [this.productPrice, Validators.required],
      lienAchat: [this.achatLien, Validators.required],

      miniDescription: [this.shortDescriptione, Validators.required],
      description: [this.produitDescription, Validators.required]
    });
  }

  onSubmit() {
    // Récupérer la valeur sélectionnée
    const selectedValue = this.editForm.value.categorieId; // Cela sera sous la forme "cat123-Nom de la Catégorie"

    // Séparer l'ID et le nom
    const [categoryId, categoryName] = selectedValue.split("-"); // Cela va créer un tableau avec [id, nom]

    let tabs: Product = {
      title: this.editForm.value.titre,
      permaLink: this.editForm.value.lienPermanent || "", // Assurez-vous que ce champ n'est pas undefined
      category: {
        categoryId: categoryId, // Utiliser l'ID
        categoryName: categoryName // Utiliser le nom
      },
      imgLink: this.editForm.value.lienImg,
      videoLink: this.editForm.value.lienVideo,

      price: parseFloat(this.editForm.value.prix) || 0, // Assurez-vous que le prix est un nombre, sinon utilisez 0
      buyLink: this.editForm.value.lienAchat,
      shortDescription: this.editForm.value.miniDescription,
      description: this.editForm.value.description,
      bestSell: false,
      view: 0,
      createdAt: new Date()
    };
    // Stocker l'ID de la catégorie dans une constante
    const categoId = tabs.category.categoryId;

    if (this.valider) {
      this.produitService
        .updateProduct(categoryId, this.productId, tabs)
        .then(() => {
          this.showSuccessUpdate();
          this.editForm.reset();
          this.goHome();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.produitService
        .createProduct(tabs, categoId)
        .then(() => {
          this.showSuccessAdd();
          this.editForm.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //Go Home
  goHome() {
    this.router.navigate(["/home/produit_liste"]);
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
