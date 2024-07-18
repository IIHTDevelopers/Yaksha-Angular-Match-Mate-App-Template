import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../../services/match.service';
import { UserService } from '../../../services/user.service';
import { CommunicationService } from '../../../services/communication.service';
import { Profile } from '../../../models/profile.model';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-match-recommendations',
  templateUrl: './match-recommendations.component.html',
  styleUrls: ['./match-recommendations.component.css']
})
export class MatchRecommendationsComponent implements OnInit {
  matches: Profile[] = [];
  userId = 1;

  constructor(
    private matchService: MatchService,
    private userService: UserService,
    private communicationService: CommunicationService
  ) { }

  ngOnInit(): void {
    // write your logic here
  }

  loadMatchRecommendations(): void {
    // write your logic here
  }

  transformUserToProfile(user: User, currentUserProfile: Profile): any {
    // write your logic here
  }

  sendInterest(matchId: number): void {
    // write your logic here
  }
}
