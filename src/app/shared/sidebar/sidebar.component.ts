import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "../../feature/categories.service";
import { Observable } from "rxjs";
import { SubscribersService } from "../../feature/subscribers.service";
import { DataCategoProductService } from "../../feature/data-catego-product.service";
import { AuthentificationService } from '../../feature/authentification.service';
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  //VARIABLE
  categories: Observable<Array<any>>;
  //ABONNES
  subscribers: Observable<Array<any>>;

  //AVIS PRODUITS
  avisProduits: Observable<Array<any>>;
  constructor(
    private dataService: DataCategoProductService,
    private authService: AuthentificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.readCatego();
    this.readSubscriber();
  }

  //FONCTION READ CATEGORIE
  readCatego() {
    this.categories = this.dataService.readCategory();
  }

  //FONCTION READ SUBSCRIBERS
  readSubscriber() {
    this.subscribers = this.dataService.readSubscriber();
  }
  //FONCTION READ SUBSCRIBERS
  readAvisProduit() {
    this.avisProduits = this.dataService.readAllComment();
  }

  logOut() {
    this.authService
      .logout()
      .then(() => {
        this.goHome();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  goHome() {
    this.router.navigate(["/"]);
  }
}
