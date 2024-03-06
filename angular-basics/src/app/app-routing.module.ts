import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicConceptsComponent } from './basic-concepts/basic-concepts.component';
import { ProductsComponent } from './products/products.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
