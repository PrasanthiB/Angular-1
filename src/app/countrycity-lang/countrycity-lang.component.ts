import { Component } from '@angular/core';

@Component({
  selector: 'app-countrycity-lang',
  templateUrl: './countrycity-lang.component.html',
  styleUrls: ['./countrycity-lang.component.css']
})
export class CountrycityLangComponent {

public country: string = "";
public capital: string = "";
public language: string = "";

countries:any = [
  { country: 'India', capital: 'New Delhi', language: 'Hindi' },
  { country: 'France', capital: 'Paris', language: 'French' },
  { country: 'New Zealand', capital: 'Wellington', language: 'English' }
];

}
