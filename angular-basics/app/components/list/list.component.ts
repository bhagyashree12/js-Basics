import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
brews:Object;
  constructor(private request:ServiceService) { }

  ngOnInit(): void {
    this.request.getBeer().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    }
  );
  }

}
