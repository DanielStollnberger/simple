import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import {
  MatDialog,
} from '@angular/material/dialog';
import { User } from '../modals/user.class';


@Component({
  selector: 'app-user',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})

export class UserComponent {
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogAddUser)
  }
 
}
