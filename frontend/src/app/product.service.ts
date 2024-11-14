import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the interface for a Product
export interface Product {
  pid: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  salt: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8070/products'; 

  constructor(private http: HttpClient) {}

  // Get all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/get`); 
  }

  // Get a single product by ID
  getProduct(pid: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/get/${pid}`); 
  }

  // Create a new product (insert or update)
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/insert`, product, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
    });
  }

  // Update an existing product
  updateProduct(pid: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/update/${pid}`, product, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
    });
  }

  // Delete a product by ID
  deleteProduct(pid: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${pid}`); 
  }
}
