import { Component, ElementRef, Renderer2, AfterViewInit, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { GridDataService } from '../services/grid-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  collections: any[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2, private gridData: GridDataService) {}

  ngOnInit(): void {
   this.gridData.getData().subscribe((data:any) => {
    this.collections = data;
    console.log(this.collections)
   });
  }

  leftArrowClicked = false;
  rightArrowClicked = false;
  productsNumber = [1, 2, 3, 4, 5, 6];
  isDragStart = false;
  isDragging = false;
  prevPageX!: number;
  prevScrollLeft!: number;
  positionDiff!: number;



  ngAfterViewInit(): void {
    // Add a class to the carousel element for styling
    this.renderer.addClass(this.el.nativeElement.querySelector('.carousel'), 'carousel-container');
  }

  dragStart(e: MouseEvent | TouchEvent): void {
    this.isDragStart = true;
    this.prevPageX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
    this.prevScrollLeft = this.el.nativeElement.querySelector('.carousel')?.scrollLeft || 0;
  }


  dragging(e: MouseEvent | TouchEvent): void {
    if (!this.isDragStart) return;
    e.preventDefault();
    this.isDragging = true;
    this.renderer.addClass(this.el.nativeElement.querySelector('.carousel'), 'dragging');
    this.positionDiff = (e instanceof MouseEvent ? e.pageX : e.touches[0].pageX) - this.prevPageX;
    this.el.nativeElement.querySelector('.carousel')!.scrollLeft = this.prevScrollLeft - this.positionDiff;
  }

  dragStop(): void {
    this.isDragStart = false;
    this.renderer.removeClass(this.el.nativeElement.querySelector('.carousel'), 'dragging');
    if (!this.isDragging) return;
    // Implement auto-slide logic if needed
  }

  scroll(direction: 'left' | 'right'): void {
    const carousel = this.el.nativeElement.querySelector('.carousel');
    const firstCardWidth = this.el.nativeElement.querySelector('.product-cards').clientWidth + 13;

    if (direction === 'left') {
      carousel.scrollLeft -= firstCardWidth;
    } else {
      carousel.scrollLeft += firstCardWidth;
    }
  }

  handleLeftArrowClick(): void {
    this.leftArrowClicked = true;
    this.rightArrowClicked = false;

    // Reset arrow colors after a delay (e.g., 1000ms)
    setTimeout(() => {
      this.leftArrowClicked = false;
    }, 1000);
  }

  handleRightArrowClick(): void {
    this.leftArrowClicked = false;
    this.rightArrowClicked = true;

    // Reset arrow colors after a delay (e.g., 1000ms)
    setTimeout(() => {
      this.rightArrowClicked = false;
    }, 1000);
  }
}
