import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public apiUrl = '';

  constructor(private http: HttpClient) { }

  sendInterest(userId: number, interestedUserId: number): any {
    // write your logic here
  }

  getInterestsByUserId(userId: number): any {
    // write your logic here
  }

  updateInterest(interestId: number, status: 'sent' | 'received' | 'accepted' | 'declined'): any {
    // write your logic here
  }

  sendMessage(senderId: number, receiverId: number, content: string): any {
    // write your logic here
  }

  getMessagesByUserId(userId: number): any {
    // write your logic here
  }

  getMessagesBetweenUsers(userId1: number, userId2: number): any {
    // write your logic here
  }
}
