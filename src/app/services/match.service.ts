import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  public apiUrl = '';

  constructor(private http: HttpClient) { }

  getMatchesByUserId(userId: number): any {
    // write your logic here
  }

  getMatchById(matchId: number): any {
    // write your logic here
  }

  createMatch(matchData: Match): any {
    // write your logic here
  }

  updateMatch(matchId: number, matchData: Match): any {
    // write your logic here
  }

  deleteMatch(matchId: number): any {
    // write your logic here
  }
}
