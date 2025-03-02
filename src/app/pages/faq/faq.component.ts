import { Component, OnInit } from "@angular/core";
import { FaqsService } from "../../feature/faqs.service";
import { Faq } from "../../feature/shape/faq";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.css"]
})
export class FaqComponent implements OnInit {
  //VARIABLE
  faqs: Array<Faq>;

  //GERER LE STATUT DU FORMULAIRE
  formStatus: boolean = false;

  //DIRECTIVE BI DIRECTIONNEL TWO WAY DATA BIDIN
  idFaq: string;
  askFaq: string;
  answer: string;

  //PAGINATION
  currentPage: number = 1; // Page actuelle
  itemsPerPage: number = 4; // Nombre de catégories par page

  constructor(private faqServce: FaqsService, private toastr: ToastrService) {}

  ngOnInit() {
    this.readBanner();
  }

  //READ BANNER
  readBanner() {
    this.faqServce.read().subscribe((data: any) => {
      this.faqs = data;
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

  showSuccessDelete() {
    this.toastr.warning(
      "L'élément a été supprimé avec succès ! ",
      "Suppression  Réussie"
    );
  }

  // FIN TOASTR SERVICE FONCTION

  //Formulair de Soumission
  onSubmit(formValue: any) {
    let faqData: Faq = {
      question: formValue.value.question,
      respond: formValue.value.respond,
      createdAt: new Date()
    };

    if (this.formStatus) {
      this.faqServce
        .update(this.idFaq, faqData)
        .then(() => {
          this.showSuccessUpdate();
          formValue.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.faqServce
        .create(faqData)
        .then(() => {
          this.showSuccessAdd();
          formValue.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //Formulair pour Editer
  onEdit(faq: string, respond: string, id: any) {
    this.askFaq = faq;
    this.answer = faq;
    this.idFaq = id;

    this.formStatus = true;

    // Faire défiler vers l'input
    const inputElement = document.getElementById("nom");
    if (inputElement) {
      inputElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Faire défiler vers l'input
      inputElement.focus(); // Mettre le focus sur l'input
    }
  }

  //SUPRIMER METHODE
  onDelete(id: any) {
    this.faqServce
      .delete(id)
      .then(() => {
        this.showSuccessDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
