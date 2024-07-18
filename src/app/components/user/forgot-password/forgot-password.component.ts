import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    // write your logic here
  }

  onSubmit(): void {
    // write your logic here
  }
}
