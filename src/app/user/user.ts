import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import {
  MatDialog,
} from '@angular/material/dialog';
import { User } from '../modals/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, doc, addDoc, collection, onSnapshot, query } from '@angular/fire/firestore';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})

export class UserComponent {
  readonly dialog = inject(MatDialog);
  users: any = [];
  firestore: Firestore = inject(Firestore);

  q = query(collection(this.firestore, "user"));
  unsubscribe = onSnapshot(this.q, (querySnapshot) => {
    this.users = [];
    querySnapshot.forEach((doc) => {
      this.users.push({
        id: doc.id,
        ...doc.data()
      });
    });
  });

  openDialog() {
    this.dialog.open(DialogAddUser)
  }
}
