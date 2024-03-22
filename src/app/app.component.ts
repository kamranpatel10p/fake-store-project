import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'fake-store-project';

  constructor (private http: HttpClient, private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log(data);
      }
    );  
  }
}
