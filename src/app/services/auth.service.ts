import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiUrl = '';

  constructor(private http: HttpClient) { }

  signUp(userData: User): any {
    // write your logic here
  }

  login(email: string, password: string): any {
    // write your logic here
  }

  forgotPassword(email: string): any {
    // write your logic here
  }

  getUserById(userId: number): any {
    // write your logic here
  }

  updateUser(userId: number, userData: User): any {
    // write your logic here
  }

  deleteUser(userId: number): any {
    // write your logic here
  }

  getCurrentUser(): any {
    // write your logic here
  }

  isLoggedIn(): boolean {
    // write your logic here
    return false;
  }

  setLoggedIn(value: boolean) {
    // write your logic here
  }
}
