import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-comment-detail",
  templateUrl: "./product-comment-detail.component.html",
  styleUrls: ["./product-comment-detail.component.css"]
})
export class ProductCommentDetailComponent implements OnInit {
  //VARIABLE POUR FAIRE RECEPTIONNER LES DETAILS PRODUITS
  idCommentaire: string;

  produitNom: string;
  produitImg: string;

  nom: string;
  email: string;
  commentaire: string;
  createdAt: Date;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((values: any) => {
      this.idCommentaire = values.id;
      this.produitNom = values.productName;
      this.produitImg = values.productImg;
      this.nom = values.name;
      this.email = values.email;
      this.commentaire = values.comment;
      this.createdAt = values.createdAt;
    });
  }
}
