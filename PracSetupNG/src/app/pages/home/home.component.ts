import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trash = [
    {
      title: 'My project 1', desc: 'trash', nFO:'something'
    },
    {
      title: 'My project 2', desc: 'trash 2', nFO:'something 2'
    },
    {
      title: 'My project 3', desc: 'trash 2', nFO:'something 3'
    }
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
