// import { Component } from '@angular/core';
// import { ProductService } from '../product.service';

// @Component({
//   selector: 'app-tablet',
//   templateUrl: './tablet.component.html',
//   styleUrl: './tablet.component.css'
// })
// export class TabletComponent {
  
//   products: any = []; 
//   errorMessage: string = ''; 

//   constructor(private productService: ProductService) { }

//   ngOnInit(): void {
//     this.getProducts(); 
//   }




//   getProducts(): void {
//     this.productService.getProducts().subscribe(
//       (data: any) => {
//         // Filter products to get only those with category 'tablets'
//         this.products = data.filter((product: any) => product.category.toLowerCase() === 'tablets');
        
//         // Optionally log the filtered products to the console
//         console.log(this.products);
        
//         // If you want to log specific details from the filtered list
//         if (this.products.length > 0) {
//           console.log('First tablet category:', this.products[0].category);
//         } else {
//           console.log('No tablets found.');
//         }
//       },
//       (error) => {
//         this.errorMessage = 'Failed to load products. Please try again later.';
//         console.error('Error fetching products:', error);
//       }
//     );
//   }
  

// }


import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.css'] // Corrected 'styleUrls' (not 'styleUrl')
})
export class TabletComponent {

  products: any[] = []; 
  errorMessage: string = ''; 

  constructor(private productService: ProductService,private router:Router,private cartService:CartService) { }

  ngOnInit(): void {
    this.getProducts(); 
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (data: any) => {
        
        this.products = data.filter((product: any) => {
          return product.category && product.category.trim().toLowerCase() === 'tablet';
        });
      
        if (this.products.length > 0) {
          console.log('Tablets found:', this.products);
        } else {
          console.log('No tablets found.');
        }
      },
      (error) => {
        
        this.errorMessage = 'Failed to load products. Please try again later.';
        console.error('Error fetching products:', error);
      }
    );
  }
  addToCart(product: any): void {
    console.log("data",product);
    // this.cartService.setProduct(product);
    this.cartService.setTablet(product);
    this.router.navigate(['/cart']);       
  }
}
