import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl}  from '@angular/forms';
import {RestroService} from '../restro.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css']
})
export class UpdateRestroComponent implements OnInit {
  aleart:boolean=false
  editRestreo = new FormGroup({
    name: new FormControl(''),
    location:new FormControl(''),
    Speciality: new FormControl('')
})

  constructor(private route:ActivatedRoute, private restro:RestroService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id)
    this.restro.getDataForUpdate(this.route.snapshot.params.id).subscribe((result:any)=>{
      // console.log("Result",result)
      //to put the old data inide name locality and speciliality input box.

      this.editRestreo = new FormGroup({
        name: new FormControl(result['name']),
        location:new FormControl(result['location']),
        Speciality: new FormControl(result['Speciality'])
    })



    })


   }
   updateData(){ //updating dataTo database
    //  console.log(this.editRestreo.value);
    this.restro.postUpdateData(this.route.snapshot.params.id,this.editRestreo.value).subscribe((result)=>{
      console.log(result)
      this.aleart=true;
    })

   }
   closeAlert(){

    this.aleart=false;


   }

  }


