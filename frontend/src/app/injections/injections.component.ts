import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { NavigationExtras, Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-injections',
  templateUrl: './injections.component.html',
  styleUrl: './injections.component.css'
})
export class InjectionsComponent {

  
  products: any[] = []; 
  errorMessage: string = ''; 

  constructor(private productService: ProductService,private router:Router,private cartService:CartService) { }

  ngOnInit(): void {
    this.syrupProducts(); 
  }

  syrupProducts(): void {
    this.productService.getProducts().subscribe(
      (data: any) => {
      
        this.products = data.filter((product: any) => {
          return product.category && product.category.trim() === 'Injection';
        });
        
        if (this.products.length > 0) {
          console.log('Syrups found:', this.products);
        } else {
          console.log('No syrups found.');
        }
      },
      (error) => {
        this.errorMessage = 'Failed to load products. Please try again later.';
        console.error('Error fetching products:', error);
      }
    );
  }
  
  //addToCart(product: any): void {
    // const navigationExtras: NavigationExtras = {
    //   state: {
    //     product: product
    //   }
    // };
    // this.router.navigate(['/cart'], navigationExtras);
//  }
  addToCart(product: any): void {
    console.log("data",product);
    this.cartService.setProduct(product);
    this.router.navigate(['/cart']);       
  }
}
