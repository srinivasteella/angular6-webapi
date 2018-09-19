import { ProductService } from '../../service/product.service';
import { Product } from './../../product';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]
  user:string
  constructor(private router:Router, private service:ProductService) {
    this.user=localStorage.getItem('user')
   }
  ngOnInit() {
  this.service.getProducts()
  .subscribe(data=>{
    this.products=data
  })
  }
  addProduct():void{
    this.router.navigate(['add-product'])
  }
  editProduct(product: Product): void {
    console.log(product.id)
    localStorage.removeItem("id");
    localStorage.setItem("id", product.id.toString());
    this.router.navigate(['edit-product']);
  };
  deleteProduct(product: Product): void {
    this.service.delete(product.id)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      })
  };
}
