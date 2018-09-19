import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
addForm:FormGroup
user:string

  constructor(private formBuilder:FormBuilder,private service:ProductService,private router:Router) {
    this.user=localStorage.getItem('user')
   }

  ngOnInit() {
    this.addForm=this.formBuilder.group({
      name:['',Validators.required],
      detail:['',Validators.required]
    })
  }
  onSubmit(){
    this.service.addProduct(this.addForm.value)
    .subscribe(data=>{
      this.router.navigate([''])
    })
  }
back(){
  this.router.navigate([''])
}
}
