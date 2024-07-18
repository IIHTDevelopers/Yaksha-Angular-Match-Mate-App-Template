import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Profile } from '../../../models/profile.model';

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css']
})
export class BasicSearchComponent implements OnInit {
  searchForm!: FormGroup;
  searchResults: Profile[] = [];
  submitted = false;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    // write your logic here
  }

  onSearch(): void {
    // write your logic here
  }

  transformUserToProfile(user: any): any {
    // write your logic here
    return null;
  }
}
