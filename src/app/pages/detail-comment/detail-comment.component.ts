import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ShopCommentsService } from "../../feature/shop-comments.service";

@Component({
  selector: "app-detail-comment",
  templateUrl: "./detail-comment.component.html",
  styleUrls: ["./detail-comment.component.css"]
})
export class DetailCommentComponent {
  //VARIABLE POUR LIRE
  id: string;
  name: string;
  email: string;
  active: boolean;
  comment: string;
  createdAt: Date;

  validerCommentaire: boolean;

  constructor(
    private route: ActivatedRoute,
    private testyServce: ShopCommentsService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((valeur: any) => {
      (this.id = valeur.id),
        (this.name = valeur.name),
        (this.email = valeur.email),
        (this.active = valeur.active),
        (this.comment = valeur.comment),
        (this.createdAt = valeur.createdAt);
    });
  }

  ondelete(id: string) {
    this.testyServce.delete(id);
  }

  // Méthode pour obtenir l'URL mailto
  getMailToUrl(email: string): string {
    return this.testyServce.generateMailTo(email);
  }

  // Méthode pour copier l'email dans le presse-papiers
  copyToClipboard(email: string): void {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.log("Email copié :", email);
        // Vous pouvez afficher un message de confirmation ici si nécessaire
      })
      .catch((err) => {
        console.error("Erreur lors de la copie :", err);
      });
  }
}
