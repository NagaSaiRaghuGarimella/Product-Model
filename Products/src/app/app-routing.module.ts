import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { GetProductComponent } from './get-product/get-product.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [{path:'products', component:ProductsListComponent},
{path:'add-product', component:AddProductComponent},
{path:'',redirectTo:'products',pathMatch:'full'},
{path:'product-details/:id',component:GetProductComponent},
{path:'update-product/:id',component:AddProductComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
