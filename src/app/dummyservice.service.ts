import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import {Joke} from './joke';

@Injectable()
export class DummyserviceService {
  url ='https://my.api.mockaroo.com/my_saved_schema.json?key=0bf59570';
  url2='https://api.chucknorris.io/jokes/random';
  constructor(
    private http: HttpClient
    
  ) {
   }

  fetchData() {
    return this.http.get(this.url);
  }

  joke():Observable<any[]>{
   
    return  Observable.timer(0,6000).switchMap(x => this.http.get(this.url2)).pluck('value').pairwise(); 
    // .pluck('value'));
    // .map((joke:Joke)=> joke.value));
  }

 
}
