import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }
  creatuser(data:any){
return this.http.post<any>("http://localhost:3000/posts", data).pipe(map((data:any)=>{
  return data
}))
  }
  getuser(){
    return this.http.get("http://localhost:3000/posts")
  }
}
