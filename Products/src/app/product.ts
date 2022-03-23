import { DatePipe } from "@angular/common";

export class Product {
    productId!: number;
    productName!: String;
    brandName!: String;
    price!: number;
    discountPercent!: number;
    expiryDate!: DatePipe; 
    manufacturedDate!: DatePipe;
    
    
}
