import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./feature/auth.guard";
import { LoginFormComponent } from "./shared/login-form/login-form.component";

const routes: Routes = [
  {
    path: "",
    component: LoginFormComponent
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },

  {
    path: "home",
    canActivate: [AuthGuard],

    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule)
  }
  /*  {
    // path: "**"
    //component: NotFoundComponent
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
