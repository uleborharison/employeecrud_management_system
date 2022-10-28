import { MyserviceService } from './../../service/myservice.service';
import { employee } from './../employeemodel';
import { Component, OnInit } from '@angular/core';


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
  constructor(private employeeservice: MyserviceService) { }

  ngOnInit(): void {
  }

}
