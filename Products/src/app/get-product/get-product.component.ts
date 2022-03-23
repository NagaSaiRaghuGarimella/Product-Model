import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {

  productId!: number;
  product!: Product;
    constructor(private productService:ProductService,private route:ActivatedRoute) { }
  
    ngOnInit(): void {
  
      this.productId = this.route.snapshot.params['id'];
  
      this.productService.getProductById(this.productId).subscribe(data=>this.product=data);

    
    }
  }
