import { Component, OnInit } from "@angular/core";
import { SubscribersService } from "../../feature/subscribers.service";
import { Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-suscription",
  templateUrl: "./suscription.component.html",
  styleUrls: ["./suscription.component.css"]
})
export class SuscriptionComponent implements OnInit {
  subscribers: any;

  //PAGINATION
  currentPage: number = 1; // Page actuelle
  itemsPerPage: number = 4; // Nombre de catégories par page

  constructor(
    private abonneService: SubscribersService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.readSubscribers();
  }

  readSubscribers() {
    this.abonneService.read().subscribe((data: any) => {
      this.subscribers = data;
    });
  }

  // Méthode pour obtenir l'URL mailto
  getMailToUrl(email: string): string {
    return this.abonneService.generateMailTo(email);
  }

  // Méthode pour copier l'email dans le presse-papiers
  copyToClipboard(email: string): void {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        this.showSuccessCopy();
        // Vous pouvez afficher un message de confirmation ici si nécessaire
      })
      .catch((err) => {
        console.error("Erreur lors de la copie :", err);
      });
  }

  //TOASTR MESSAGE
  showSuccessCopy() {
    this.toastr.success(
      "L'e-mail a été copié avec succès ! 📋",
      "Copie Réussie"
    );
  }

  showSuccessDelete() {
    this.toastr.warning(
      "L'e-mail a été supprimé avec succès ! ",
      "Suppression  Réussie"
    );
  }

  onDelete(id: string) {
    this.abonneService
      .delete(id)
      .then(() => {
        this.showSuccessDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
