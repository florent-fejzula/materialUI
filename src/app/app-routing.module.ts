import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './components/features/communication/communication.component';
import { CustomLibraryComponent } from './components/features/custom-library/custom-library.component';
import { DirectivesPipesComponent } from './components/features/directives-pipes/directives-pipes.component';
import { FeaturesComponent } from './components/features/features.component';
import { LifecycleHooksComponent } from './components/features/lifecycle-hooks/lifecycle-hooks.component';
import { RouteParamsDetailComponent } from './components/features/route-params/route-params-detail/route-params-detail.component';
import { RouteParamsComponent } from './components/features/route-params/route-params.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { PerfumeResolveService } from './route-guards/perfume-resolve.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'features', component: FeaturesComponent, children: [
    { path: 'directives-pipes', component: DirectivesPipesComponent },
    { path: 'communication', component: CommunicationComponent },
    { path: 'route-params', component: RouteParamsComponent, children: [
      { path: ':id', component: RouteParamsDetailComponent }
    ] },
    { path: 'custom-library', component: CustomLibraryComponent },
    { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
  ] },
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
