import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LijstenComponentComponent } from './lijsten-component/lijsten-component.component';
import { ToevoegenComponentComponent } from './toevoegen-component/toevoegen-component.component';
import { AanpassenComponentComponent } from './aanpassen-component/aanpassen-component.component';
import { VerwijderenComponentComponent } from './verwijderen-component/verwijderen-component.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditServerComponentComponent } from './edit-server-component/edit-server-component.component';
import { NgForm, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'footerComponent', component: FooterComponentComponent },
  { path: 'headerComponent', component: HeaderComponentComponent },
  { path: 'homeComponent', component: HomeComponentComponent },
  { path: 'lijstenComponent', component: LijstenComponentComponent },
  { path: 'toevoegenComponent', component: ToevoegenComponentComponent },
  { path: 'aanpassenComponent', component: AanpassenComponentComponent },
  { path: 'verwijderenComponent', component: VerwijderenComponentComponent },
  { path: 'editServerComponent/:id', component: EditServerComponentComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    LijstenComponentComponent,
    ToevoegenComponentComponent,
    AanpassenComponentComponent,
    VerwijderenComponentComponent,
    EditServerComponentComponent,
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }

