import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent  {
  success: boolean;
  user = new User();
  states: Array<string> = [];

  constructor() {
    this.user = new User();
    this.success = false;
    this.states = ["Alaska",
                      "Alabama",
                      "Arkansas",
                      "Arizona",
                      "California",
                      "Colorado",
                      "Connecticut",
                      "District of Columbia",
                      "Delaware",
                      "Florida",
                      "Georgia",
                      "Hawaii",
                      "Iowa",
                      "Idaho",
                      "Illinois",
                      "Indiana",
                      "Kansas",
                      "Kentucky",
                      "Louisiana",
                      "Massachusetts",
                      "Maryland",
                      "Maine",
                      "Michigan",
                      "Minnesota",
                      "Missouri",
                      "Mississippi",
                      "Montana",
                      "North Carolina",
                      "North Dakota",
                      "Nebraska",
                      "New Hampshire",
                      "New Jersey",
                      "New Mexico",
                      "Nevada",
                      "New York",
                      "Ohio",
                      "Oklahoma",
                      "Oregon",
                      "Pennsylvania",
                      "Rhode Island",
                      "South Carolina",
                      "South Dakota",
                      "Tennessee",
                      "Texas",
                      "Utah",
                      "Virginia",
                      "Vermont",
                      "Washington",
                      "Wisconsin",
                      "West Virginia",
                      "Wyoming"]
  }
  onSubmit() {
    console.log("submit");
    this.success = true;
    this.user = new User()
  };
}
