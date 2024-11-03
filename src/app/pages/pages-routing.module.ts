import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { TagComponent } from './tag/tag.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TestymoniesComponent } from './testymonies/testymonies.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { AboutComponent } from './about/about.component';
import { ImgCarouselComponent } from './img-carousel/img-carousel.component';
import { SuscriptionComponent } from './suscription/suscription.component';
import { BanniereComponent } from './banniere/banniere.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "logo",
        component: LogoComponent
      },
      {
        path: "tags",
        component: TagComponent
      },
      {
        path: "produit_detail",
        component: ProductDetailComponent
      },
      {
        path: "temoignages",
        component: TestymoniesComponent
       },
       {
        path: "temoignages_detail",
        component: DetailCommentComponent
       },
      {
        path: "apropos",
        component: AboutComponent
      },

      {
        path: "banniere",
        component: ImgCarouselComponent
      },
      {
        path: "banniere_texte",
        component: BanniereComponent
      },
      {
        path: "abonnement",
        component: SuscriptionComponent
      },
      {
        path: "form_produit",
        component: ProductFormComponent
      },
      
      

       { path: "", redirectTo: "/home/logo", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
