import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicConceptsComponent } from './basic-concepts/basic-concepts.component';
import { ProductsComponent } from './products/products.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'basic-concepts',
    component: BasicConceptsComponent
  },
  {
    path:'products',
    component: ProductsComponent
  },
  {
    path:'template-form',
    component: TemplateDrivenFormComponent
  },
  {
    path:'reactive-form',
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
