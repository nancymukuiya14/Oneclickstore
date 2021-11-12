import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private service:EventsService) { }
  infoData:any;

  ngOnInit(): void {
    this.infoData = this.service.infoDetails;
  }

}
