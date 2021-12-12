import { Component, OnInit } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { Gateway } from 'src/app/models/gateway';
import { PDevice } from 'src/app/models/pdevice';


@Component({
  selector: 'app-creategateway',
  templateUrl: './creategateway.component.html',
  styleUrls: ['./creategateway.component.css']
})
export class CreategatewayComponent implements OnInit {

devices:PDevice[]=[];

gateway:Gateway={
  serial_number:"",
  hr_name:"",
  ip_address:"",
  associated_peripheral:[],
};

checkbox:boolean=false;


  constructor(public gatewayService:GatewayService,private router:Router) { }

  ngOnInit(): void {
  }





addDevice(deviceForm:NgForm){
  const uid=deviceForm.value.uid;
  const vendor=deviceForm.value.vendor;
  const date_created=deviceForm.value.date_created;

  if(uid===0||!vendor||!date_created){
    alert('Please fill the required fields');
   }
   else{
    if(this.devices.length<=9){
      this.devices.push(deviceForm.value);
      deviceForm.reset();
    }
    else{
      alert('You can only add 10 devices');
    }
   }
}

createGateway(gatewayForm:NgForm){
  this.gateway=gatewayForm.value;
  this.gateway.associated_peripheral=this.devices;
  this.sendGatewayToSave(this.gateway);
  gatewayForm.reset();
}


validatingGateway(gatewayForm:NgForm){
 const serial_number= gatewayForm.value.serial_number;
 const ip_address=gatewayForm.value.ip_address;
 const hr_name=gatewayForm.value.hr_name;
 const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
 let valid=true;

 if(serial_number===""||ip_address===""||hr_name===""){
  alert('Please fill the required fields');
 }
 else{
  for(let i=0;i<this.gatewayService.gateways.length;i++){
    if(serial_number===this.gatewayService.gateways[i].serial_number){
      valid=false;
    }
  }
  if(!valid){
   alert('There is already a gateway with the Serial Number: '+serial_number);
  }
  else{
    if(!ip_address.match(ipformat)){
     alert('You have entered an invalid IP address!');
    }
    else{
     this.createGateway(gatewayForm);
    }
  }
 }

}

sendGatewayToSave(gateway:Gateway){
    this.gatewayService.createGateway(gateway).subscribe(
      res=>{
        console.log(res);
        this.router.navigateByUrl('');
      },
      err=>console.log(err));
}

deleteDevice(position:number){
    const res=confirm('Are you sure you want to delete?');
    if(res){
     this.devices.splice(position, 1);
    }

}


}
