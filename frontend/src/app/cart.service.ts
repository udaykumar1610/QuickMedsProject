import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: any[] = [];
  private tablets: any[] = [];

  constructor() { }

  private selectedProduct: any;

  setProduct(product: any): void {
    this.selectedProduct = product;
  }

  getProduct(): any {
    return this.selectedProduct;
  }


  setTablet(product: any): void {
    this.selectedProduct = product;
  }
  getTablet(): any {
    return this.selectedProduct;
  }
}
