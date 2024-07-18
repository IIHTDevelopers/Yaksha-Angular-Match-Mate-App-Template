import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { BlockService } from '../../../services/block.service';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-block-report',
  templateUrl: './block-report.component.html',
  styleUrls: ['./block-report.component.css']
})
export class BlockReportComponent implements OnInit {
  users: User[] = [];
  selectedUserId!: number;
  selectedUserName: string = '';
  userId!: number;

  constructor(
    private userService: UserService,
    private blockService: BlockService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // write your logic here
  }

  loadBlockedUsers(): void {
    // write your logic here
  }

  selectUser(user: User): void {
    // write your logic here
  }

  blockUser(): void {
    // write your logic here
  }

  unblockUser(): void {
    // write your logic here
  }

  reportUser(): void {
    // write your logic here
  }
}
