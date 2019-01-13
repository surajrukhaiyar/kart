import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatSidenavModule } from '@angular/material';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadItemComponent } from './upload-item/upload-item.component';

const routes: Routes = [
    {path: '',  redirectTo: '/welcome',  pathMatch: 'full'},
    {path: 'welcome', component: DashboardComponent, data: { preload: true }},
    {path: 'cart', component: CartComponent , data: { preload: true }},
    {path: 'category', component: CategoryComponent, data: { preload: true }},
    {path: 'uploadItem', component: UploadItemComponent, data: { preload: true }}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,MatFormFieldModule,MatInputModule,MatSidenavModule ]
})
export class AppRoutingModule { }
