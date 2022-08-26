import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { PerfumeResolveService } from './route-guards/perfume-resolve.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'guards', loadChildren: () => import('./components/guards/guards/guards.module').then(m => m.GuardsModule), resolve: {perfumes: PerfumeResolveService} },
  { path: 'forms', component: FormsComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
