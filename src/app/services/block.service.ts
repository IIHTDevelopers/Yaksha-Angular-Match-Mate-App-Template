import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlockService {
  public apiUrl = '';

  constructor(private http: HttpClient) { }

  blockUser(userId: number, blockedUserId: number): any {
    // write your logic here
  }

  unblockUser(userId: number, blockedUserId: number): any {
    // write your logic here
  }

  getBlockedUsers(userId: number): any {
    // write your logic here
  }
}
