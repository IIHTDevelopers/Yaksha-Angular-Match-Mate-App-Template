import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../../services/communication.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  sentInterests: any[] = [];
  receivedInterests: any[] = [];
  userId = 1;

  constructor(private communicationService: CommunicationService, private userService: UserService) { }

  ngOnInit(): void {
    // write your logic here
  }

  loadInterests(): void {
    // write your logic here
  }

  updateInterest(interestId: number, status: 'accepted' | 'declined'): void {
    // write your logic here
  }
}
