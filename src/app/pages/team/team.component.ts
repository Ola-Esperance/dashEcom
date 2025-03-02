import { Component } from "@angular/core";
import { Team } from "../../feature/shape/team";
import { TeamsService } from "../../feature/teams.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent {
  //VARIABLE
  teams: Array<Team>;

  //GERER LE STATUT DU FORMULAIRE
  formStatus: boolean = false;

  //DIRECTIVE BI DIRECTIONNEL TWO WAY DATA BIDIN
  idTeam: string;
  nameTeam: string;
  imgTeam: string;
  roleTeam: string;
  descriptionTeam: string;

  //PAGINATION
  currentPage: number = 1; // Page actuelle
  itemsPerPage: number = 4; // Nombre de catégories par page

  constructor(
    private teamServce: TeamsService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.readBanner();
  }

  //READ BANNER
  readBanner() {
    this.teamServce.read().subscribe((data: any) => {
      this.teams = data;
    });
  }

  //Formulair de Soumission
  onSubmit(formValue: any) {
    let teamData: Team = {
      name: formValue.value.name,
      imgLink: formValue.value.imgLink,
      qualification: formValue.value.qualification,
      description: formValue.value.qualification,
      createdAt: new Date()
    };

    if (this.formStatus) {
      this.teamServce
        .update(this.idTeam, teamData)
        .then(() => {
          this.showSuccessUpdate();
          formValue.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.teamServce
        .create(teamData)
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
  onEdit(name: string, imgLink: any, role: string, description: any, id: any) {
    this.nameTeam = name;
    this.imgTeam = imgLink;
    this.roleTeam = role;
    this.descriptionTeam = description;
    this.idTeam = id;

    this.formStatus = true;

    // Faire défiler vers l'input
    const inputElement = document.getElementById("nom");
    if (inputElement) {
      inputElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Faire défiler vers l'input
      inputElement.focus(); // Mettre le focus sur l'input
    }
  }

  onDelete(id: any) {
    this.teamServce
      .delete(id)
      .then(() => {
        this.showWarningDelete();
      })
      .catch((err) => {
        err;
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

  showWarningunActivate() {
    this.toastr.warning(
      "L'élément a été désactivé avec succès ! 🎉",
      "Désactivation Réussie"
    );
  }

  showSuccessCopy() {
    this.toastr.success(
      "L'élément a été copié avec succès ! 📋",
      "Copie Réussie"
    );
  }

  showWarningDelete() {
    this.toastr.warning(
      "L'élément a été supprimé avec succès ! ",
      "Suppression  Réussie"
    );
  }
  // FIN TOASTR SERVICE FONCTION
}
