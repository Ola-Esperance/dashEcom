import { Component } from "@angular/core";
import { SubscribersService } from "../../feature/subscribers.service";
import { Observable } from "rxjs";
import { CategoriesService } from "../../feature/categories.service";
import { ShopCommentsService } from "../../feature/shop-comments.service";
import { ProductCommentsService } from "../../feature/product-comments.service";
import { DataCategoProductService } from "../../feature/data-catego-product.service";

@Component({
  selector: "app-acceuil-page",
  templateUrl: "./acceuil-page.component.html",
  styleUrls: ["./acceuil-page.component.css"]
})
export class AcceuilPageComponent {
  //VARIABLE
  subscribers: Observable<Array<any>>;
  categories: Observable<Array<any>>;
  shopComments: Observable<Array<any>>;
  productCommentDay: Observable<Array<any>>;
  productComment: Observable<Array<any>>;

  constructor(private dataService: DataCategoProductService) {}

  ngOnInit(): void {
    this.readCatego();
    this.readSubscriber();
    this.readAvisProduit();
    this.readAvisBoutique();
    this.avisJournalier();
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
    this.productComment = this.dataService.readAllComment();
  }

  //FONCTION READ SUBSCRIBERS
  readAvisBoutique() {
    this.shopComments = this.dataService.readShopComment();
  }

  avisJournalier() {
    this.productCommentDay = this.dataService.getTotalAvisToday();
  }
}
