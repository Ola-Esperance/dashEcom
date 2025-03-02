import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AboutUsService } from "../../feature/about-us.service";
import { ToastrService } from "ngx-toastr";
import { About } from "../../feature/shape/about";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-form-about",
  templateUrl: "./form-about.component.html",
  styleUrls: ["./form-about.component.css"]
})
export class FormAboutComponent implements OnInit {
  //CREATION FORM VARIABLE
  editForm: FormGroup;

  //TWO-WAY BIDING
  aboutId: string;
  aboutTitle: string;
  aboutImgLink: string;

  aboutCountry: string;
  aboutAdress: string;
  aboutEmail: string;
  aboutPhone: string;

  aboutContent: string;

  formStatus: boolean = false;

  constructor(
    private fb: FormBuilder,
    private aboutServce: AboutUsService,
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

      this.aboutCountry = values.country;
      this.aboutAdress = values.adress;
      this.aboutEmail = values.email;
      this.aboutPhone = values.phone;

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

      country: [this.aboutCountry],
      adress: [this.aboutAdress],
      email: [this.aboutEmail, Validators.email],
      phone: [this.aboutPhone],

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
    let data: About = {
      title: this.editForm.value.title,
      content: this.editForm.value.content,

      country: this.editForm.value.country,
      adress: this.editForm.value.adress,
      email: this.editForm.value.email,
      phone: this.editForm.value.phone,

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
    this.router.navigate(["/home/apropos"]);
  }
}
