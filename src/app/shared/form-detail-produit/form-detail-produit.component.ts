import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Product } from '../../feature/shape/product';


@Component({
  selector: 'app-form-detail-produit',
  templateUrl: './form-detail-produit.component.html',
  styleUrls: ['./form-detail-produit.component.css']
})
export class FormDetailProduitComponent implements OnInit {
  //TWO WAY DATA BIDING
  id:string
    productTitle:string;
    //lIEN PERMANENT QUI VA S'AUTO REMPLIR
    permaLink:string="";
    productImage:string;
    productPrice:number;
    author:string;
    view:number;
    editionYear:Date;
    produitDescription:string
    createdAt:Date


    //FORM VAR
  editForm: FormGroup;


   //PRODUITS
   produits: Observable<Array<any>>;
   valider: boolean = false;

  constructor(
    private fb:FormBuilder
  ){}

  //ACTION AUTOMATISÉ
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

//FONCTION PARTIE: Cette partie concerne les différentes fonctions à crer

//FONCTION POUR GESTION AUTOMATIQUE DE PERMALINK
  onTitle($e: any) {
    const title = $e.target.value;
    this.permaLink = title.replace(/\s/g, '-');
  }

//FONCTION POUR CRER UN PRODUIT
 initAddForm() {
    this.editForm = this.fb.group({
      titre: ["", Validators.required],
      lienPermanent: ["", Validators.required],
      lienImg: ["", Validators.required],
      prix: ["", Validators.required],
      autheur:["", Validators.required],
      anneeEdition:["", Validators.required],
      description:["", Validators.required],
    });
  }



  //FONCTION POUR MODIFIER UN PRODUIT
  initEdiit() {
    this.editForm = this.fb.group({
      titre: [this.productTitle , Validators.required],
      lienPermanent: [this.permaLink, Validators.required],
      lienImg: [this.productImage, Validators.required],
      prix: [this.productPrice, Validators.required],
      autheur:[this.author, Validators.required],
      anneeEdition:[this.editionYear, Validators.required],
      description:[this.produitDescription, Validators.required],
    });
  }


  //FONCTION POUR SOUMETTRE 
  onSubmit() {
    let tabs:Product = {
      productTitle: this.editForm.value.titre ,
      permaLink:this.editForm.value.lienPermanent ,
      productImage:this.editForm.value.lienImg,   
      productPrice: parseFloat(this.editForm.value.prix) || 0, // Assurez-vous que le prix est un nombre, sinon utilisez 0
      author:this.editForm.value.autheur,
      editionYear:this.editForm.value.anneeEdition,
      produitDescription: this.editForm.value.description,
      view:0,
      createdAt:new Date()
      
    };

    return console.log(tabs);
    

    // if (this.valider) {
    //   this.produitService
    //     .updateProduct(this.id, tabs)
    //     .then(() => {
    //       console.log("Modifier Ajouter");
    //       this.initAddForm();
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } else {
    //   this.produitService
    //     .creatProduct(tabs)
    //     .then(() => {
    //       console.log("Ajouter");
    //       this.initAddForm();
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    // console.log(tabs);
  }




}
