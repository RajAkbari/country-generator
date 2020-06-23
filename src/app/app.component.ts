import { Component } from '@angular/core';
import arraycountry from "../utils/country";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'country-generator';
  
  country = '';
  limit = 20;

  handleSlidechange(newLimit : number){
    this.limit = newLimit;
  }

  generate(){
    this.country = arraycountry.slice(0, this.limit).join(', ');
  }

}
