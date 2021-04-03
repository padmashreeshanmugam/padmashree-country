import { Component, OnInit, Input} from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  data1:any;
  datas:any;
  liststates:any
  @Input() set dataset(val:any){
    this.data1 = val.country.country_name;
    console.log(this.data1);
    if(this.data1)
    this.postData(this.data1)

  }

  constructor(private httpreq:HttpServiceService) { }

  ngOnInit(): void {
  }
  postData(data){
    this.datas = {"country" : data}
    this.httpreq.postData('/states',this.datas).subscribe((res:any)=>{
      this.liststates=res.data.states;
      console.log(this.liststates)

    })

  }

}
