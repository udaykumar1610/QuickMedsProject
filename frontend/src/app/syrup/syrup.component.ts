import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-syrup',
  templateUrl: './syrup.component.html',
  styleUrl: './syrup.component.css'
})
export class SyrupComponent {
  
  products: any[] = []; 
  errorMessage: string = ''; 

  constructor(private productService: ProductService,private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.syrupProducts(); 
  }

  syrupProducts(): void {
    this.productService.getProducts().subscribe(
      (data: any) => {
      
        this.products = data.filter((product: any) => {
          return product.category && product.category.trim() === 'Syrup';
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
  addToCart(product: any): void {
    console.log("data",product);
    this.cartService.setProduct(product);
    this.router.navigate(['/cart']);       
  }
  
}



