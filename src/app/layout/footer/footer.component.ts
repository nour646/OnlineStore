import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  storeName: string = 'Store Name';
  about = 'About us';
  customerService = 'Customer Service';
  subscribe = 'Subscribe to our newsletter';
  phoneNumber: string = '+1234567890';
  email: string = 'support@vertexcart.com';
  commercialRegister: string = 'Commercial Register : 54685168';
  taxNumber: string = 'Tax Number : 3051218451298651';
  poweredBy: string = '2023 Copyrights | Powered by VertexCart';
  location = 'Location';
  mail = 'support@vertexcart.com';


  //lists
  aboutList: {label: string, url: string}[] = [
    {label: 'About', url: '#'},
    {label: 'Privacy policy', url: '#'},
    {label: 'Terms and conditions', url:'#'},
    {label: 'Return policy', url:'#'},
    {label: 'Shipping information', url:'#'}
  ];

  customerServiceList: {label: string, url: string}[] =[
    {label: 'FQA', url: '#'},
    {label: 'Support', url: "#"},
    {label: 'Complaint and suggestions', url:'#'}
  ];

  //images
  facebookImage: string = 'assets/images/footer/facebook.svg';
  youtubeImage: string = 'assets/images/footer/youtube.svg';
  whatsappImage: string = 'assets/images/footer/whatsapp.svg';
  locationImage: string = 'assets/images/footer/location.svg';
  callImage: string = 'assets/images/footer/call.svg';
  mailImage: string = 'assets/images/footer/mail 1.svg';
  copyrightImage: string = 'assets/images/footer/copyright 1.svg';
  emailImage: string = 'assets/images/footer/email-input.svg';
  logoImage: string = 'assets/images/footer/store_logo.png'

  westernUnionImage: string = 'assets/images/footer/westren-union.svg';
  amazonPayImage: string = 'assets/images/footer/amazon-pay.svg';
  masterCardImage: string = 'assets/images/footer/master-card.svg';
  visaImage: string = 'assets/images/footer/visa.svg';
  bankTransferImage: string = 'assets/images/footer/bank-transfer.svg'

}
