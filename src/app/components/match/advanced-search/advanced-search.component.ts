import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  searchForm!: FormGroup;
  searchResults: User[] = [];
  submitted = false;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    // write your logic here
  }

  onSearch(): void {
    // write your logic here
  }
}
