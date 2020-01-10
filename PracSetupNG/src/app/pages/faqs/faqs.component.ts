import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  flip = false;

  constructor() { }

  ngOnInit() {

  }

  clickEvent(e){
    console.log(e);
    alert("you clicked me");
  }

  switch(v){
    this.flip = this.flip ? !this.flip: !this.flip;

    v.innerText = this.flip ? 'Off' :'On';
  }

}

