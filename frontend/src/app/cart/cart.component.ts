// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.css'
// })
// export class CartComponent {
//   cartItems: any[] = []; // Combined array
//   product: any[] = [];
//   tablet: any[] = [];
  

//   constructor(private cartService: CartService) { }

//   ngOnInit(): void {
//     // Retrieve products and tablets from CartService
//     const products = Array.isArray(this.cartService.getProduct()) ? this.cartService.getProduct() : [];
//     const tablets = Array.isArray(this.cartService.getTablet()) ? this.cartService.getTablet() : [];
//     console.log(products);
//     console.log(tablets);
//     // Combine products and tablets into cartItems
//     this.cartItems = [...products, ...tablets];

//     console.log("Combined Cart Items:", this.cartItems);
//     if (this.cartItems.length > 0) {
//       console.log('Items added to cart:', this.cartItems);
//     } else {
//       console.log('No items found in cart.');
//     }
//   }}
 



import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  product: any[] = [];
  tablet: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    const cartProduct = this.cartService.getProduct();
    const cartTablet = this.cartService.getTablet();

    console.log("product",cartProduct);
    console.log("tab",cartTablet);
    // Ensure product is an array
    this.product = Array.isArray(cartProduct) ? cartProduct : [cartProduct];
    this.tablet = Array.isArray(cartTablet) ? cartTablet : [cartTablet];
    if (this.product.length) {
      console.log('Product added to cart:', this.product);
    } else {
      console.log('No product data found.');
    }
  }

  // increment(item: any): void {
  //   item.quantity++;
  // }

  // decrement(item: any): void {
  //   if (item.quantity > 1) {
  //     item.quantity--;
  //   }
  // }

  // getTotalPrice(): any {
  //   return this.product.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  // }
}
