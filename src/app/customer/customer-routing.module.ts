import {NgModule, OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {CustomerGuardGuard} from '../shared/guards/customer-guard.guard';


const routes: Routes = [
  { path: 'customer', component: CustomerComponent, canActivate: [CustomerGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule{}

