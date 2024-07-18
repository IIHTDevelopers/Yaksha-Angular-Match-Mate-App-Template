import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../../services/communication.service';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { BlockService } from '../../../services/block.service';
import { User } from '../../../models/user.model';
import { Message } from '../../../models/communication.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  users: User[] = [];
  messages: Message[] = [];
  selectedUserId!: number;
  selectedUserName: string = '';
  newMessage: string = '';
  userId!: number;

  constructor(
    private communicationService: CommunicationService,
    private userService: UserService,
    private authService: AuthService,
    private blockService: BlockService
  ) { }

  ngOnInit(): void {
    // write your logic here
  }

  loadUsers(): void {
    // write your logic here
  }

  selectUser(user: User): void {
    // write your logic here
  }

  loadMessages(): void {
    // write your logic here
  }

  sendMessage(): void {
    // write your logic here
  }

  blockUser(userId: number): void {
    // write your logic here
  }
}
