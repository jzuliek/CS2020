import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/data/services.service';

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.scss']
})
export class MainsComponent implements OnInit {
  apiURL = 'http://api.bart.gov/api/etd.aspx?cmd=etd&orig=RICH&key=Z2R9-5KQ2-9SYT-DWE9&json=y'
  
  constructor(private dataS: ServicesService) { }

  ngOnInit() {
    this.dataS.getURL(this.apiURL).subscribe(
      x => {
        console.log(x);
      }
    )
  }

}
