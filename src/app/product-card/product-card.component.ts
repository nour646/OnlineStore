import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product!: Product;

  currentIndex = 0;

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }
}
