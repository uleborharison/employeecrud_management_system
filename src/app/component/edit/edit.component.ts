import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyserviceService } from './../../service/myservice.service';
import { employee } from './../employeemodel';

interface gender{
  value: string;
  viewvalue: string
};
interface userposition{
  value: string;
  viewvalue: string
};

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public empy: employee={} as employee;
  public dataid:any;
  public mydata:any;
  usergender:gender[]=[
    {value:'male', viewvalue: 'male'},
    {value:'female', viewvalue: 'female'}
]

position:userposition[]=[
  {value:'Angular Developer', viewvalue: 'Angular Developer'},
  {value:'React Developer', viewvalue: 'React Developer'},
  {value:'Java Developer', viewvalue: 'Java Developer'},
]
constructor(private employeeservice: MyserviceService, private Activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.Activatedroute.paramMap.subscribe((param:Params)=>{
      this.dataid = param['get']('dataid')
    });

this.employeeservice.fetchdata(this.dataid).subscribe((data:any)=>{
this.empy = data;
console.log(data);

})
  }

  updatedata(){
    this.employeeservice.update(this.empy, this.dataid).subscribe((data:any)=> {
      alert('Data Updated Successfully!!!');
      this.router.navigate(['/view'])
    })
  }

}
