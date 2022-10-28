import { MyserviceService } from './../../service/myservice.service';
import { employee } from './../employeemodel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface gender{
  value: string;
  viewvalue: string
};
interface userposition{
  value: string;
  viewvalue: string
};
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public empy: employee={} as employee;
  usergender:gender[]=[
    {value:'male', viewvalue: 'male'},
    {value:'female', viewvalue: 'female'}
]

position:userposition[]=[
  {value:'Angular Developer', viewvalue: 'Angular Developer'},
  {value:'React Developer', viewvalue: 'React Developer'},
  {value:'Java Developer', viewvalue: 'Java Developer'},
]
  router: any;
  constructor(private employeeservice: MyserviceService, router: Router) { }

  ngOnInit(): void {
  }
add(){
  this.employeeservice.creatuser(this.empy).subscribe((data:employee)=>{
    console.log(data);
    alert("data added successfully")
    this.router.navigate(['/view'])
  },
  err=> {
    alert('Something Went Wrong')
    this.router.navigate(['/']) }
    )
  }
}
