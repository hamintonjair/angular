import { LoginService } from 'src/app/services/login.service';
import { LoginModel } from './../../models/LoginModel';
import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { interval, timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';
import { RolService } from 'src/app/services/rol.service';
import { RolModel } from 'src/app/models/RolModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  listadoRol = new Array<RolModel>();

  loginForm: FormGroup;
  rolForm: FormGroup;
  titulo = 'Iniciar sesión';
  id: string | null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,    
    private aRouter: ActivatedRoute,
    private loginService: LoginService,
    private rolService: RolService
  ) { 

      this.loginForm = this.fb.group({

       Password: ['', Validators.required],   
       Rol: ['', Validators.required],
 
     })
      this.id = this.aRouter.snapshot.paramMap.get('id');
  }     
   ngOnInit(): void {
    
  }
   Login(){

    const login: LoginModel = {
      Password: this.loginForm.get('Password')?.value,
      Rol: this.loginForm.get('Rol')?.value,
      
    }    
    
      console.log(login);

  }

     


  
}
