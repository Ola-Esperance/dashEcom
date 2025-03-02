import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BannieresTexteService } from "../../feature/bannieres-texte.service";
import { TexteBanner } from "../../feature/shape/texte-banner";

@Component({
  selector: "app-form-banniere",
  templateUrl: "./form-banniere.component.html",
  styleUrls: ["./form-banniere.component.css"]
})
export class FormBanniereComponent implements OnInit {
  //VARIABLE POUR DIRECTIVE BIDIRECTIONNELLE
  idBanner: string;
  nameSite: string;
  titleBanner: string;
  textoBanner: string;

  //FORM VAR
  editForm: FormGroup;

  //Status
  formStatus: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private textBannerServce: BannieresTexteService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((param: any) => {
      this.idBanner = param.id;
      this.nameSite = param.siteName;
      this.titleBanner = param.title;
      this.textoBanner = param.text;
    });
    if (this.idBanner) {
      this.initEditForm();
      this.formStatus = true;
    }
  }

  //CREATION FORM METHODE

  initEditForm() {
    this.editForm = this.fb.group({
      nomSite: [this.nameSite, Validators.required],
      titre: [this.titleBanner, Validators.required],
      texto: [this.textoBanner, Validators.required]
    });
  }

  //SOUMISSION METHODE
  onSubmit() {
    let bannerData: TexteBanner = {
      siteName: this.editForm.value.nomSite,
      title: this.editForm.value.titre,
      text: this.editForm.value.texto
    };
    if (this.formStatus) {
      this.textBannerServce
        .update(this.idBanner, bannerData)
        .then(() => {
          console.log("Update");
          this.editForm.reset();
          this.goHome();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //Go Home
  goHome() {
    this.router.navigate(["/home//banniere_texte"]);
  }
}
