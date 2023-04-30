import { Component } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  suggestedProducts: SuggestedProduct[] = [
    {
      bannerimage: 'Baner/Baner_Mobile.png',
      category: {
        id: 0,
        category: 'electronics',
        subcategory: 'mobiles',
      },
    },
    {
      bannerimage: 'Baner/Baner_Laptop.png',
      category: {
        id: 0,
        category: 'electronics',
        subcategory: 'laptops',
      },
    },
    {
      bannerimage: 'Baner/Baner_Chair.png',
      category: {
        id: 0,
        category: 'furniture',
        subcategory: 'chairs',
      },
    },
  ];
}
