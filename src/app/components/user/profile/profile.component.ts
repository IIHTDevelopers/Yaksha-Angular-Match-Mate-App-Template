import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  userId!: number;
  isEditMode = false; // Add this property to control edit mode

  constructor(private fb: FormBuilder, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    // write your logic here
  }

  loadUserProfile(): void {
    // write your logic here
  }

  enableEdit(): void {
    // write your logic here
  }

  disableEdit(): void {
    // write your logic here
  }

  onSubmit(): void {
    // write your logic here
  }
}
