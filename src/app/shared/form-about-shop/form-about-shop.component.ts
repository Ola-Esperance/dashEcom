import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AboutShopService } from "../../feature/about-shop.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AboutShop } from "../../feature/shape/about-shop";

@Component({
  selector: "app-form-about-shop",
  templateUrl: "./form-about-shop.component.html",
  styleUrls: ["./form-about-shop.component.css"]
})
export class FormAboutShopComponent {
  //CREATION FORM VARIABLE
  editForm: FormGroup;

  //TWO-WAY BIDING
  aboutId: string;
  aboutTitle: string;
  aboutImgLink: string;
  aboutContent: string;

  formStatus: boolean = false;

  constructor(
    private fb: FormBuilder,
    private aboutServce: AboutShopService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getElement();
    if (this.aboutId) {
      this.formStatus = true;
      this.initEdit();
    }
  }

  //GET VALUE FROM QUERYPARAMS
  getElement() {
    this.route.queryParams.subscribe((values: any) => {
      this.aboutId = values.id;
      this.aboutTitle = values.title;
      this.aboutImgLink = values.imgLink;
      this.aboutContent = values.content;
    });
  }

  /* //METHODE POUR INITIALISER LE FORM DE CREATION A L'OUVERTURE DE LA PAGE
  initAdd() {
    this.editForm = this.fb.group({
      title: ["", Validators.required],
      imgLink: ["", Validators.required],
      content: ["", Validators.required]
    });
  } */

  //METHODE POUR INITIALISER LE FORM DE MISE A JOUR A L'OUVERTURE DE LA PAGE
  initEdit() {
    this.editForm = this.fb.group({
      title: [this.aboutTitle, Validators.required],
      imgLink: [this.aboutImgLink, Validators.required],
      content: [this.aboutContent, Validators.required]
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

  // FIN TOASTR SERVICE FONCTION

  //METHODE POUR CRER
  onSubmit() {
    let data: AboutShop = {
      title: this.editForm.value.title,
      content: this.editForm.value.content,

      imgLink: this.editForm.value.imgLink
    };

    if (this.formStatus) {
      this.aboutServce
        .update(this.aboutId, data)
        .then(() => {
          this.showSuccessUpdate();
          this.goToHome();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //GO HOME
  goToHome() {
    this.router.navigate(["/home/apropos_shop"]);
  }
}
