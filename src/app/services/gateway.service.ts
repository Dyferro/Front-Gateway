import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gateway } from '../models/gateway';
import{PDevice}from '../models/pdevice';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {


URL_API="http://localhost:3000/api/gateways";

gateways: Gateway[]=[];

gateway:Gateway={
  serial_number:"",
  hr_name:"",
  ip_address:"",
  associated_peripheral:[],
};

device:PDevice={
  uid:0,
  vendor:"",
  date_created:new Date(),
  status:false,
};

  constructor(private http: HttpClient) { }

  getGateways(){
    return this.http.get<Gateway[]>(this.URL_API);
  }

  getGateway(_id:string){
    this.http.get(`${this.URL_API}/${_id}`);
  }

  createGateway(gateway:Gateway){
   return this.http.post(this.URL_API,gateway);
  }

  deleteGateway(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

  updateGateway(gateway:Gateway){
    return this.http.put(`${this.URL_API}/${gateway._id}`,gateway);
  }

}
