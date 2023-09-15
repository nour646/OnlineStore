import { kidsListItems } from '../../data/kids_menu_items';
import { Component } from '@angular/core';
import { MegaMenuItem } from 'src/app/interfaces/MegaMenuItems';
import { SingleMenuItem } from 'src/app/interfaces/SingleMenuItem';
import { electronicsListItems } from 'src/app/data/electronics-menu-items';
import { homeAndLivingListItems } from 'src/app/data/home&living_menu_items';
import { menListItems } from 'src/app/data/men_menu_items';
import { womenListItems } from 'src/app/data/women_menu_items';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  //defining arrays for my menus data
  women_list_items: MegaMenuItem[] = womenListItems;
  men_list_items: MegaMenuItem[] = menListItems;
  kids_list_items: SingleMenuItem[] = kidsListItems;
  home_and_living_list_items: SingleMenuItem[] = homeAndLivingListItems;
  electronics_list_items: MegaMenuItem[] = electronicsListItems;

  logoImage: string = 'assets/images/footer/store_logo.png';
  storeName: string = 'Store Name';
  storeSlogan: string = 'Store Solgan';


  //images
  searchImage: string = 'assets/images/menu/search-normal.svg';
  bagImage: string = 'assets/images/menu/bag-2.svg';
  notificationImage: string = 'assets/images/menu/notification 1.svg';
  userImage: string = 'assets/images/menu/user.svg'

}
