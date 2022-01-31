import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    roleId: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onRegister() {
    var newUser: Register = this.registrationForm.value;
    console.log(newUser.roleId);

    this.authService.register(newUser).subscribe();
  }

}
