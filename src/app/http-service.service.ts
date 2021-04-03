import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  data:any;
  constructor(private http:HttpClient) { }


  getData(url){
    let baseUrl = environment.apiCountry + url;
    return this.http.get(baseUrl);
  }
  postData(urls,datas){
    console.log(urls);
    let baseUrl =environment.apiOther+urls;
    return this.http.post(baseUrl,datas);
  }
}
