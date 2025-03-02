import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ShopCommentsService } from "../../feature/shop-comments.service";
import { ShopComment } from "../../feature/shape/shop-comment";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-form-comment-shop",
  templateUrl: "./form-comment-shop.component.html",
  styleUrls: ["./form-comment-shop.component.css"]
})
export class FormCommentShopComponent implements OnInit {
  //CREATION FORM VARIABLE
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commentServce: ShopCommentsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initAdd();
  }
  //METHODE POUR INITIALISER LE FORM DE CREATION A L'OUVERTURE DE LA PAGE
  initAdd() {
    this.editForm = this.fb.group({
      nom: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      profesion: ["", Validators.required],
      imgLink: ["", Validators.required],
      commentaire: ["", Validators.required]
    });
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
      "L'élément a été activé avec succès ! 🎉",
      "Activation Réussie"
    );
  }

  showSuccessCopy() {
    this.toastr.success(
      "L'élément a été copié avec succès ! 📋",
      "Copie Réussie"
    );
  }

  showSuccessDelete() {
    this.toastr.warning(
      "L'élément a été supprimé avec succès ! ",
      "Suppression  Réussie"
    );
  }
  // FIN TOASTR SERVICE FONCTION

  //METHODE POUR CRER
  onSubmit() {
    let data: ShopComment = {
      name: this.editForm.value.nom,
      email: this.editForm.value.email,
      profesion: this.editForm.value.profesion,
      imgLink: this.editForm.value.imgLink,
      active: false,
      comment: this.editForm.value.commentaire,
      createdAt: new Date()
    };

    this.commentServce
      .create(data)
      .then(() => {
        this.showSuccessAdd();
        this.editForm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
