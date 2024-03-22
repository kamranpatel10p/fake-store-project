import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;

  ngOnInit(): void {
    
  }
}
