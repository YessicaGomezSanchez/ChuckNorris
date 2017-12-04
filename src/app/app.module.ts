import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }  from '@angular/http';



import { DummyserviceService } from './dummyservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DummyserviceService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
