import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  brandName!:String
  products:Product[]= [];
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
this.getProducts();
   
  }

  getProducts(){
    this.productService.getProductsList().subscribe(data=>{this.products = data});
  }

  productDetails(productId:number){
    this.router.navigate(['product-details',productId]);
  }

  updateProduct(productId:number){
    this.router.navigate(['update-product',productId]);
  }

  deleteProduct(id:number){
    this.productService.deleteProductById(id).subscribe(data=>{
    console.log(data);
     },error=>alert(error.message),()=>this.getProducts())
  }

  search(){

      if(this.brandName==''){
  
        this.ngOnInit()
  
      }else{
  
        this.products = this.products.filter(res=>{
  
          return res.brandName.toLocaleLowerCase().match(this.brandName.toLocaleLowerCase());
  
        })
  
      }
  
    }
    
    key = 'productId';
    reverse:boolean=false;
    sort(key: string){
      this.key = key;
      this.reverse =!this.reverse;

    }

  }



  



