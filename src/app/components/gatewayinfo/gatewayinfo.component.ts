import { Component, OnInit } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { Gateway } from 'src/app/models/gateway';
import { PDevice } from 'src/app/models/pdevice';

@Component({
  selector: 'app-gatewayinfo',
  templateUrl: './gatewayinfo.component.html',
  styleUrls: ['./gatewayinfo.component.css']
})
export class GatewayinfoComponent implements OnInit {

  devices:PDevice[]=[];

  checkbox:boolean=false;

  constructor(public gatewayService:GatewayService,private router:Router) { }

  ngOnInit(): void {
  }

  deleteDevice(gateway:Gateway, position:number){
  const res=confirm('Are you sure you want to delete?');
  if(res){
    gateway.associated_peripheral.splice(position, 1);
    this.gatewayService.updateGateway(gateway).subscribe(
      res=>{
        console.log(res);
        this.router.navigateByUrl('info');
      },
      err=>console.log(err));
  }

}

addDevice(gateway:Gateway, deviceForm:NgForm){
  this.devices=this.gatewayService.gateway.associated_peripheral;
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
      this.gatewayService.updateGateway(gateway).subscribe(
        res=>{
          console.log(res);
          this.router.navigateByUrl('info');
        },
        err=>console.log(err));

    }
    else{
      alert('You can only add 10 devices');
    }
   }
}


}
