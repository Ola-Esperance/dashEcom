import { Component } from "@angular/core";
import { AboutShopService } from "../../feature/about-shop.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-about-shop",
  templateUrl: "./about-shop.component.html",
  styleUrls: ["./about-shop.component.css"]
})
export class AboutShopComponent {
  //VARIABLE
  about_us: Observable<Array<any>>;

  constructor(private aboutServce: AboutShopService) {}
  ngOnInit() {
    this.read();
  }

  //READ BANNER
  read() {
    this.about_us = this.aboutServce.read();
  }
}
