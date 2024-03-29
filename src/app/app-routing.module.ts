import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path: '', redirectTo:'products', pathMatch:'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'products/single-product', component: SingleProductComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
