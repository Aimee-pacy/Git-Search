import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import {  NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"profile", component:UsersComponent},
  {path:"repo", component:RepositoriesComponent},
  {path: "", redirectTo:"profile", pathMatch:"full"},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
