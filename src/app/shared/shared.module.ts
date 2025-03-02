import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { FormDetailProduitComponent } from "./form-detail-produit/form-detail-produit.component";
import { FormCommentComponent } from "./form-comment/form-comment.component";
import { FormAboutComponent } from "./form-about/form-about.component";
import { FormBanniereComponent } from "./form-banniere/form-banniere.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FormCommentShopComponent } from "./form-comment-shop/form-comment-shop.component";
import { FormCommentProductComponent } from "./form-comment-product/form-comment-product.component";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { HttpClientModule } from "@angular/common/http";
import { FormAboutShopComponent } from "./form-about-shop/form-about-shop.component";
import { LoginFormComponent } from "./login-form/login-form.component";

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    FormDetailProduitComponent,
    FormCommentComponent,
    FormAboutComponent,
    FormBanniereComponent,
    FormCommentShopComponent,
    FormCommentProductComponent,
    FormAboutShopComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AngularEditorModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    FormDetailProduitComponent,
    FormCommentComponent,
    FormAboutComponent,
    FormBanniereComponent,
    FormCommentShopComponent,
    FormCommentProductComponent,
    FormAboutShopComponent,
    LoginFormComponent,
    RouterModule
  ]
})
export class SharedModule {}
