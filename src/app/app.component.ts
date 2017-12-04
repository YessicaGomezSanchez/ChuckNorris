import { Component } from '@angular/core';
import { error } from 'selenium-webdriver';
import { DummyserviceService } from './dummyservice.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[];
  
  constructor(    
    private dummyService: DummyserviceService
    
  ){   
  }

  ngOnInit(): void {
    this.dummyService.joke().subscribe(resp  => this.data = resp);  
  }
  
  fetchData() {
    this.dummyService.fetchData()
    .subscribe(data => console.log(data));
  }

}
