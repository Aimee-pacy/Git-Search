import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { FormComponent } from './form/form.component';
import { BarComponent } from './bar/bar.component';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DatePipe } from './date.pipe';
import { DatesPipe } from './dates.pipe';
import { CaloringDirective } from './caloring.directive';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    FormComponent,
    BarComponent,
    UsersComponent,
    NotfoundComponent,
    DatePipe,
    DatesPipe,
    CaloringDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
