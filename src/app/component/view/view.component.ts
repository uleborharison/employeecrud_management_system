import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../../service/myservice.service';
import { employee } from './../employeemodel';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public empy: employee={} as employee;
  myemployee: any;
  constructor(private employeeservice: MyserviceService) { }

  ngOnInit(): void {
    this.getmyuser()
  }

  getmyuser(){
    this.employeeservice.getuser().subscribe(res=>{
      this.myemployee = res;
//console.log(res);
    })
  }

  deleteuser(user: any){
    if(confirm('Are you sure you to delete?'))
    this.employeeservice.delete(user).subscribe(()=>{
    });
    this.getmyuser()
  }

}
