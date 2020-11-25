import {NgModule, OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { CustomerGuardGuard } from './shared/guards/customer-guard.guard';
import {ItemComponent} from './item/item/item.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

