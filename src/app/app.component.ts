import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMDashBoard';
  status: boolean = false;

  getdetails(){
    this.status = !this.status;       
  }




}
