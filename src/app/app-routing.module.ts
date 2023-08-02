import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AboutComponent } from './pages/about/about.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { DisputeComponent } from './pages/dispute/dispute.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { TabsComponent } from './shared/components/tabs/tabs.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },

  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'cookies',
        component: CookiesComponent
      },
      {
        path: 'dispute',
        component: DisputeComponent
      },
      {
        path: 'privacy',
        component: PrivacyComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      },

      {
        path: 'tabs',
        component: TabsComponent
      },
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
