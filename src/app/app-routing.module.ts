import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{GatewayComponent} from '../app/components/gateway/gateway.component';
import { CreategatewayComponent } from './components/creategateway/creategateway.component';
import {GatewayinfoComponent} from './components/gatewayinfo/gatewayinfo.component';

const routes: Routes = [
  {path:'',component:GatewayComponent},
  {path:'create',component:CreategatewayComponent},
  {path:'info',component:GatewayinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
