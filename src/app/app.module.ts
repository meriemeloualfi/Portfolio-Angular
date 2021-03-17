import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ServicesComponent } from './components/services/services.component';
import { ReferencesComponent } from './components/references/references.component';
import { RealisationsComponent } from './components/realisations/realisations.component';
import { ContactComponent } from './components/contact/contact.component';
import { EquipeComponent } from './components/equipe/equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    ServicesComponent,
    ReferencesComponent,
    RealisationsComponent,
    ContactComponent,
    EquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
