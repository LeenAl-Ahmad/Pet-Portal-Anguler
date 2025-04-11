import { Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { PetsComponent } from '../pets/pets.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'pets', component: PetsComponent }
];
