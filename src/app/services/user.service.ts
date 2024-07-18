import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Profile } from '../models/profile.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public apiUrl = '';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllUsers(): any {
    // write your logic here
  }

  getUserById(userId: number): any {
    // write your logic here
  }

  createUser(userData: User): any {
    // write your logic here
  }

  updateUser(userId: number, userData: User): any {
    // write your logic here
  }

  deleteUser(userId: number): any {
    // write your logic here
  }

  getProfileByUserId(userId: number): any {
    // write your logic here
  }

  createProfile(profileData: Profile): any {
    // write your logic here
  }

  updateProfile(profileId: number, profileData: Profile): any {
    // write your logic here
  }

  deleteProfile(profileId: number): any {
    // write your logic here
  }
}
