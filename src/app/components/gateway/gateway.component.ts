import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gateway } from 'src/app/models/gateway';
import { GatewayService } from 'src/app/services/gateway.service';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {


  constructor(public gatewayService:GatewayService,private router:Router) { }

  ngOnInit(): void {
    this.getGateways();
  }

  getGateways(){
    this.gatewayService.getGateways().subscribe(
      res=>{
        this.gatewayService.gateways=res;
      },
      err=>console.log(err));
  }

  getCreateGateway(){
    this.router.navigateByUrl('create');
  }

  deleteGateway(id:string){
    const res=confirm('Are you sure you want to delete?\nAll information associated to this Gateway will be permanently deleted.\nThis operation can not be undone.');
    if(res){
      this.gatewayService.deleteGateway(id).subscribe(
        res=>{
          this.getGateways();
          console.log(res);},
        err=>console.log(err));
    }
  }

  infoGateway(gateway:Gateway){
    console.log(gateway);
    this.gatewayService.gateway=gateway;
    this.router.navigateByUrl('info');
  }


}
