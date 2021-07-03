import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl}  from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import {RestroService} from '../restro.service';

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {
  aleart:boolean=false
  addRestreo = new FormGroup({
    name: new FormControl(''),
    location:new FormControl(''),
    Speciality: new FormControl('')
})
  constructor(private restro:RestroService) { }

  ngOnInit(): void {
  }
  collectData(){
    console.log(this.addRestreo.value);
    this.restro.addNewRestrotoDatabase(this.addRestreo.value).subscribe((result)=>{
      console.log("Your resturent is saved successfully to database",result);
      this.aleart=true //when restro is added then only alert be apper;
      this.addRestreo.reset({}) //it will clear form detail after succesfull submit


    })
    //after submitting dat alert will still be there so inorder to close the

    }
    closeAlert(){
      this.aleart=false;


  }



}
