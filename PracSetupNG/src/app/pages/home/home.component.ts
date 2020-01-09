import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trash: Student[] =[
    {
      fName: 'jon',
      lName: 'stewart',
      sName: 'jonstewart',
      pNumber: 4444444

    },
    {
      fName: 'lourn',
      lName: 'selga',
      sName: 'louuurrnnn',
      pNumber: 4444444

    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
