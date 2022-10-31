import { ViewComponent } from './component/view/view.component';
import { AddComponent } from './component/add/add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './component/edit/edit.component';

const routes: Routes = [
  {path:'', redirectTo: 'add', pathMatch: 'full'},
  {path:'add', component: AddComponent},
  {path:'view', component: ViewComponent},
  {path:'edit/update/:dataid', component: EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
