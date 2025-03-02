import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductComment } from "../../feature/shape/product-comment";
import { ProductCommentsService } from "../../feature/product-comments.service";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-form-comment-product",
  templateUrl: "./form-comment-product.component.html",
  styleUrls: ["./form-comment-product.component.css"]
})
export class FormCommentProductComponent implements OnInit {
  //CREATION FORM VARIABLE
  editForm: FormGroup;

  //VARIABLE POUR SURVEILLER L'ARRIVÉE DE PRODUIT DETAIL
  formStatus: boolean = false;
  //TWO WAY DATA BIDING
  selectCateoryId: any;
  selectProductId: any;
  selectProductName: any;
  selectProductImg: any;
  selectProductPrice: any;

  constructor(
    private fb: FormBuilder,
    private commentServce: ProductCommentsService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((valeur: any) => {
      this.selectProductId = valeur.id;
      this.selectProductName = valeur.title;
      this.selectCateoryId = valeur.categoryId;
      this.selectProductImg = valeur.imgLink;
      this.selectProductPrice = valeur.price;
    });

    if (this.selectProductId) {
      this.formStatus = true;
      this.initAdd();
    }
  }
  //METHODE POUR INITIALISER LE FORM DE CREATION A L'OUVERTURE DE LA PAGE
  initAdd() {
    this.editForm = this.fb.group({
      commentaire: ["", Validators.required]
    });
  }

  //METHODE POUR CRER
  onSubmit() {
    let data: ProductComment = {
      product: {
        categoryId: this.selectCateoryId,
        productId: this.selectProductId,
        productName: this.selectProductName,
        productImg: this.selectProductImg,
        productPrice: this.selectProductPrice
      },
      //name: this.editForm.value.nom,
      name: `Digital Adapt`,
      //email: this.editForm.value.email,
      email: `admin`,

      comment: this.editForm.value.commentaire,
      createdAt: new Date(),
      activated: false
    };

    if (this.formStatus) {
      this.commentServce
        .create(data, this.selectCateoryId, this.selectProductId)
        .then(() => {
          this.showSuccessAdd();
          this.editForm.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //TOASTR SERVICE FONCTION
  showSuccessAdd() {
    this.toastr.success(
      "Votre réponse a été envoyé avec succès ! 🎉",
      "Envoi Réussi"
    );
  }
}
