import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  //Creation
  creatuser(data:any){
return this.http.post<any>("http://localhost:3000/posts", data).pipe(map((data:any)=>{
  return data
}))
  }

  // Displaying
  getuser(){
    return this.http.get("http://localhost:3000/posts/")
  }

  // Delete
  delete(user: any) {
    return this.http.delete("http://localhost:3000/posts/"+user.id);
  }

  //pass through param
  fetchdata(id:number){
    return this.http.get<any>("http://localhost:3000/posts/"+id)
  }

  //update
  update(data:any, id:number){
return this.http.put<any>("http://localhost:3000/posts/"+id,data)
.pipe(map((res:any)=>{
  return res
}))
  }
}
