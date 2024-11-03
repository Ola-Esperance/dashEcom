import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormDetailProduitComponent } from './form-detail-produit/form-detail-produit.component';
import { FormCommentComponent } from './form-comment/form-comment.component';
import { FormAboutComponent } from './form-about/form-about.component';
import { FormBanniereComponent } from './form-banniere/form-banniere.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    FormDetailProduitComponent,
    FormCommentComponent,
    FormAboutComponent,
    FormBanniereComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    FormDetailProduitComponent,
    FormCommentComponent,
    FormAboutComponent,
    FormBanniereComponent
  ],
})
export class SharedModule { }
