import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { RealisationsComponent } from './components/realisations/realisations.component';
import { ReferencesComponent } from './components/references/references.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'realisations', component: RealisationsComponent },
  { path: 'contact', component: ContactComponent },
  {path:'equipe',component:EquipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
