import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productId!:number
  product:Product=new Product();
  constructor(private productService:ProductService, private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe(data=>this.product=data);
    
  }

   saveProducts(){
    this.productService.createProduct(this.product).subscribe(data=>{this.productList()},
   error=>{console.log(error)} );
    
  }

  productList(){
    this.router.navigate(['/products']);
  }

  addProduct(){
    console.log(this.product);
     this.saveProducts();
  }

}
