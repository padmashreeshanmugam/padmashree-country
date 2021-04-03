import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../http-service.service'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  list:any
  country:any
  constructor(private httpreq:HttpServiceService) {
   
   }

  ngOnInit(): void {
    this.httpreq.getData('/country/json').subscribe((res:any)=>{
      this.list = res.countries;
      console.log(this.list);
    })
  }

  setCountry(data){
    this.country = data;
   
  }


 

   
}
