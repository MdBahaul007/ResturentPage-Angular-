import { Component, OnInit } from '@angular/core';
import {RestroService} from '../restro.service';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean=false;
  loginUser=new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')

  })


  constructor(private restroService:RestroService) { }

  ngOnInit(): void {}

  collectData(){
    console.log(this.loginUser.value);
    this.restroService.userLogin(this.loginUser.value).subscribe((result)=>{
      console.log("User Succesfully added",result);
      this.alert=true
      this.loginUser.reset({})
    })
  }
  closeAlert(){
    this.alert=false;
  }


}
