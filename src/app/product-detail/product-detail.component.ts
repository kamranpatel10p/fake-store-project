import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  productDetail!: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.loadProductDetails();
  }

  loadProductDetails(): void{
    const productId = this.route.snapshot.params['id'];
    this.productService.getProductDetail(productId).subscribe(
      (data) => {
        this.productDetail = data;
      },
      (error) => {
        console.error('Error fetching product detail', error);
      }
    );
  }
}
