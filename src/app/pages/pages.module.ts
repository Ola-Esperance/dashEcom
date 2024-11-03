import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LogoComponent } from './logo/logo.component';
import { TagComponent } from './tag/tag.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TestymoniesComponent } from './testymonies/testymonies.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { AboutComponent } from './about/about.component';
import { ImgCarouselComponent } from './img-carousel/img-carousel.component';
import { SuscriptionComponent } from './suscription/suscription.component';
import { BanniereComponent } from './banniere/banniere.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';


@NgModule({
  declarations: [
    HomeComponent,
    LogoComponent,
    TagComponent,
    ProductDetailComponent,
    TestymoniesComponent,
    DetailCommentComponent,
    AboutComponent,
    ImgCarouselComponent,
    SuscriptionComponent,
    BanniereComponent,
    ProductListComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
