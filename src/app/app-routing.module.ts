import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoCharacterComponent } from './pages/info-character/info-character.component';
import { ListCharacterComponent } from './pages/list-character/list-character.component';

const routes: Routes = [
  {
    path: '',
    component: ListCharacterComponent
  },
  {
    path: 'details/:id',
    component: InfoCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
