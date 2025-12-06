import { Routes } from '@angular/router';
import { ProductList } from './product/product-list/product-list';
import { ProductCreate } from './product/product-create/product-create';
import { ProductEdit } from './product/product-edit/product-edit';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductList },
  { path: 'products/create', component: ProductCreate },
  { path: 'products/edit/:id', component: ProductEdit }
];
