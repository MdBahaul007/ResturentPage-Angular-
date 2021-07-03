import { Component, OnInit } from '@angular/core';
import {RestroService} from '../restro.service';

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css']
})
export class ListRestroComponent implements OnInit {

  constructor(private restro:RestroService) { }
  data:any=[]
  ngOnInit(): void {
      this.restro.getResturentList().subscribe((result)=>{
      console.log(result);
      this.data=result;
    })
  }
  deleteRestro(item:any){
    //when we will delet restro it will be deleted from db but will show up till we not refresh so
    // using splice fun
    this.data.splice(item-1,1)     //as array item start from 0 so using -1
    this.restro.deleteRestro(item).subscribe((result)=>{
      console.warn("Result",result);

    })
  }


}
