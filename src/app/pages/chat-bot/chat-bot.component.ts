import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ChatBotLinksService } from "../../feature/chat-bot-links.service";
import { ToastrService } from "ngx-toastr";
import { ChatBotLink } from "../../feature/shape/chat-bot-link";

@Component({
  selector: "app-chat-bot",
  templateUrl: "./chat-bot.component.html",
  styleUrls: ["./chat-bot.component.css"]
})
export class ChatBotComponent {
  //VARIABLE
  chatLink: Observable<Array<any>>;

  formStatus: boolean;

  //TWO WAY BIDING
  chatBotLinkId: string;
  chatBotLink: string;

  constructor(
    private chatBotServce: ChatBotLinksService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.read();
  }

  //TOASTR SERVICE FONCTION

  showSuccessUpdate() {
    this.toastr.success(
      "Mise à jour réussie ! Vos modifications ont été enregistrées.",
      "Mise à Jour Réussie"
    );
  }

  // FIN TOASTR SERVICE FONCTION

  //READ BANNER
  read() {
    this.chatLink = this.chatBotServce.read();
  }

  //Formulair de Soumission
  onSubmit(formValue: any) {
    let data: ChatBotLink = {
      chatBotLink: formValue.value.chatBotLink
    };

    if (this.formStatus) {
      this.chatBotServce
        .update(this.chatBotLinkId, data)
        .then(() => {
          this.showSuccessUpdate();
          formValue.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //Formulair pour Editer
  onEdit(link: string, id: string) {
    this.chatBotLink = link;
    this.chatBotLinkId = id;

    this.formStatus = true;

    // Faire défiler vers l'input
    const inputElement = document.getElementById("basic-url");
    if (inputElement) {
      inputElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Faire défiler vers l'input
      inputElement.focus(); // Mettre le focus sur l'input
    }
  }
}
