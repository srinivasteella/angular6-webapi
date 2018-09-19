import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup
  loading = false;
  submitted = false;
  error = '';
  constructor( private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
    private authservice:AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  this.authservice.logout();
  }
    get f() { return this.loginForm.controls; }
    onSubmit() {
      this.submitted = true;

      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
     this.authservice.register(this.f.firstname.value,this.f.lastname.value,this.f.username.value, 
      this.f.password.value)
      .subscribe(data=>{
        console.log(data)
        this.router.navigate(['login'])
      })
    }
}
