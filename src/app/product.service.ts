import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  private apiUrl = 'https://fakestoreapi.com/products';  

  getProducts(limit?: number, category?: string): Observable<Product[]> {
    let url = this.apiUrl;
    if (category !== undefined) {
      url += `/category/${category}`;
      if (limit !== undefined) {
        url += `?limit=${limit}`;
      }
    } else if (limit !== undefined) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Product[]>(url);
  }

  getProductDetail(productId: number): Observable<Product>{
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<Product>(url);
  }
}
