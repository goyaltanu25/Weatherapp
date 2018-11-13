import { Component,Input } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  datas:any;
  cname:string;
 

  constructor( private http: Http ) { }
 
  onSubmit()
  { 
    let url ="http://api.worldweatheronline.com/premium/v1/weather.ashx?key=82246e3ca0234e1d8c590130180401&q="+this.cname+"&format=json&num_of_days=5 "; 
    console.log(this.cname);
    this.http.get(url).subscribe(
    reso =>{ 
    this.datas = reso.json()});
  }

  onAdd()
  {
    
  }
}


