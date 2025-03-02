import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LogoComponent } from "./logo/logo.component";
import { TagComponent } from "./tag/tag.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { TestymoniesComponent } from "./testymonies/testymonies.component";
import { DetailCommentComponent } from "./detail-comment/detail-comment.component";
import { AboutComponent } from "./about/about.component";
import { ImgCarouselComponent } from "./img-carousel/img-carousel.component";
import { SuscriptionComponent } from "./suscription/suscription.component";
import { ProductFormComponent } from "./product-form/product-form.component";
import { AcceuilPageComponent } from "./acceuil-page/acceuil-page.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CategoryComponent } from "./category/category.component";
import { BannerTextComponent } from "./banner-text/banner-text.component";
import { BannerTextFormComponent } from "./banner-text-form/banner-text-form.component";
import { ProductCommentComponent } from "./product-comment/product-comment.component";
import { ProductCommentDetailComponent } from "./product-comment-detail/product-comment-detail.component";
import { ShopCommentFormComponent } from "./shop-comment-form/shop-comment-form.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { FaqComponent } from "./faq/faq.component";
import { TeamComponent } from "./team/team.component";
import { ChatBotComponent } from "./chat-bot/chat-bot.component";
import { SocialMediaComponent } from "./social-media/social-media.component";
import { AboutFormComponent } from "./about-form/about-form.component";
import { AboutShopComponent } from "./about-shop/about-shop.component";
import { AboutShopFormComponent } from "./about-shop-form/about-shop-form.component";
import { ProductCommentFormComponent } from "./product-comment-form/product-comment-form.component";
import { HowWorkComponent } from "./how-work/how-work.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "acceuil",
        component: AcceuilPageComponent
      },
      {
        path: "produit_liste",
        component: ProductListComponent
      },
      {
        path: "logo",
        component: LogoComponent
      },
      {
        path: "categorie",
        component: CategoryComponent
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
        path: "avis_produit",
        component: ProductCommentComponent
      },
      {
        path: "avis_produit_detail",
        component: ProductCommentDetailComponent
      },
      {
        path: "produit_form",
        component: ShopCommentFormComponent
      },
      {
        path: "temoignages",
        component: TestymoniesComponent
      },
      {
        path: "equipe",
        component: TeamComponent
      },

      {
        path: "temoignage_form",
        component: ShopCommentFormComponent
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
        path: "apropos_form",
        component: AboutFormComponent
      },
      {
        path: "shipping",
        component: ShippingComponent
      },
      {
        path: "shipping_intro",
        component: HowWorkComponent
      },
      {
        path: "apropos_shop",
        component: AboutShopComponent
      },
      {
        path: "apropos_shop_form",
        component: AboutShopFormComponent
      },
      {
        path: "banniere",
        component: ImgCarouselComponent
      },
      {
        path: "banniere_texte",
        component: BannerTextComponent
      },
      {
        path: "banniere_texte_form",
        component: BannerTextFormComponent
      },
      {
        path: "faq",
        component: FaqComponent
      },
      {
        path: "liraison_service",
        component: ShippingComponent
      },
      {
        path: "abonnement",
        component: SuscriptionComponent
      },
      {
        path: "chat_bot",
        component: ChatBotComponent
      },

      {
        path: "reseau_social_link",
        component: SocialMediaComponent
      },

      {
        path: "form_produit",
        component: ProductFormComponent
      },
      {
        path: "form_produit_commentaire",
        component: ProductCommentFormComponent
      },

      { path: "", redirectTo: "/home/acceuil", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
