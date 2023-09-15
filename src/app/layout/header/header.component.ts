import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  phoneNumber: string = '+1234567890';
  locations: string[] = ['Damascus', 'Riyad'];
  selectedLocation: string = 'Damascus';
  currencies: string[] = ['USD', 'SAR'];
  selectedCurrency: string = 'USD';
  //array of objects having two properties
  languages:{value:string; label:string}[] = [
    {value: 'en', label: 'English'},
    {value: 'ar', label: 'Arabic'}
  ];
  selectedLanguage: string = 'en';

  //images
  callImage: string = 'assets/images/header/call.svg';
  locationImage: string = 'assets/images/header/location.svg';
  dollarImage: string = 'assets/images/header/dollar-square.svg';
  translateImage: string = 'assets/images/header/translate.svg';
  facebookImage: string = 'assets/images/header/facebook.svg';
  youtubeImage: string = 'assets/images/header/youtube.svg';
  whatsappImage: string = 'assets/images/header/whatsapp.svg';


}
