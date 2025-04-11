import { Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { PetsComponent } from '../pets/pets.component';
import { PetDetailsComponent } from '../petDetails/petDetails.component';
import { OwnersComponent } from '../owners/owners.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'pets/:id', component: PetDetailsComponent },
  { path: 'owners', component: OwnersComponent }
];
