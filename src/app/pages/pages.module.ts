import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { LogoComponent } from "./logo/logo.component";
import { TagComponent } from "./tag/tag.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { TestymoniesComponent } from "./testymonies/testymonies.component";
import { DetailCommentComponent } from "./detail-comment/detail-comment.component";
import { AboutComponent } from "./about/about.component";
import { ImgCarouselComponent } from "./img-carousel/img-carousel.component";
import { SuscriptionComponent } from "./suscription/suscription.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductFormComponent } from "./product-form/product-form.component";
import { AcceuilPageComponent } from "./acceuil-page/acceuil-page.component";
import { CategoryComponent } from "./category/category.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { BannerTextComponent } from "./banner-text/banner-text.component";
import { BannerTextFormComponent } from "./banner-text-form/banner-text-form.component";
import { ProductCommentComponent } from "./product-comment/product-comment.component";
import { ProductCommentDetailComponent } from "./product-comment-detail/product-comment-detail.component";
import { ProductCommentFormComponent } from "./product-comment-form/product-comment-form.component";
import { ShopCommentFormComponent } from "./shop-comment-form/shop-comment-form.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { FaqComponent } from "./faq/faq.component";
import { TeamComponent } from "./team/team.component";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { HttpClientModule } from "@angular/common/http";
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AboutFormComponent } from './about-form/about-form.component';
import { AboutShopComponent } from './about-shop/about-shop.component';
import { AboutShopFormComponent } from './about-shop-form/about-shop-form.component';
import { HowWorkComponent } from './how-work/how-work.component';

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

    ProductListComponent,
    ProductFormComponent,
    AcceuilPageComponent,
    CategoryComponent,
    BannerTextComponent,
    BannerTextFormComponent,
    ProductCommentComponent,
    ProductCommentDetailComponent,
    ProductCommentFormComponent,
    ShopCommentFormComponent,
    ShippingComponent,
    FaqComponent,
    TeamComponent,
    ChatBotComponent,
    SocialMediaComponent,
    AboutFormComponent,
    AboutShopComponent,
    AboutShopFormComponent,
    HowWorkComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule
  ]
})
export class PagesModule {}
