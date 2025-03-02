import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AboutUsService } from "../../feature/about-us.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  //VARIABLE
  about_us: Observable<Array<any>>;

  constructor(private aboutServce: AboutUsService) {}
  ngOnInit() {
    this.read();
  }

  //READ BANNER
  read() {
    this.about_us = this.aboutServce.read();
  }
}
