// Router Import
import { Routes } from '@angular/router';

// Page
import { OnepageMainComponent } from './onepage-main/onepage-main.component';

// Router
export const routes: Routes = [
  // Index (Home Page: Default)
  { path: 'index', component: OnepageMainComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },


];
