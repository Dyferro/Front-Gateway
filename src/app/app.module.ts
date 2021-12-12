import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatewayComponent } from './components/gateway/gateway.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CreategatewayComponent } from './components/creategateway/creategateway.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { GatewayinfoComponent } from './components/gatewayinfo/gatewayinfo.component';



@NgModule({
  declarations: [
    AppComponent,
    GatewayComponent,
    CreategatewayComponent,
    GatewayinfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
