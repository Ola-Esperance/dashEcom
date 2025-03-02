import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { BannieresTexteService } from "../../feature/bannieres-texte.service";

@Component({
  selector: "app-banner-text",
  templateUrl: "./banner-text.component.html",
  styleUrls: ["./banner-text.component.css"]
})
export class BannerTextComponent {
  //VARIABLE
  bannerText: Observable<Array<any>>;

  constructor(private bannerServce: BannieresTexteService) {}

  ngOnInit() {
    this.readBanner();
  }

  //READ BANNER
  readBanner() {
    this.bannerText = this.bannerServce.read();
  }
}
