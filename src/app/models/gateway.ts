import { PDevice } from "./pdevice";

export interface Gateway{
  serial_number:string
  hr_name:string
  ip_address:string
  createdAt?:string
  updatedAt?:string
  _id?:string
  associated_peripheral:PDevice[]

}
