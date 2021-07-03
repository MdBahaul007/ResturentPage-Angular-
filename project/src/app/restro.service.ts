import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestroService {

  url="http://localhost:3000/resturents";
  loginURL="http://localhost:3000/user-data";
  constructor(private http:HttpClient){ }
   getResturentList(){
    return this.http.get(this.url);
   }
   addNewRestrotoDatabase(data:any){
    //  console.log("service",data);

    return this.http.post(this.url,data);


   }
   deleteRestro(id:any){
     return this.http.delete(`${this.url}/${id}`)
   }
   getDataForUpdate(id:any){
     return this.http.get(`${this.url}/${id}`) //get the data of the the id for updation i.e when in list resturent when some one will click on update this function will fetch the data of of that id.
   }
   postUpdateData(id:any,data:any){
     return this.http.put(`${this.url}/${id}`,data)
   }
   userLogin(data){
     return this.http.post(this.loginURL,data);
   }
}
