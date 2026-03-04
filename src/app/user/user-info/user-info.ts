import { Component, inject, model, signal } from '@angular/core';
import { collection, doc, Firestore, onSnapshot, query } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { NgZone } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EditUserInfo } from './dialog-edit-user-info/dialog-edit-user-info';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-user-info',
  imports: [
    MatCardModule,
    MatIcon,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './user-info.html',
  styleUrl: './user-info.scss',
})
export class UserInfo {
  readonly dialog = inject(MatDialog);
  firestore: Firestore = inject(Firestore);
  userId: any;
  userInfo: any;
  unsubscribe: any;

  constructor(private route: ActivatedRoute, private zone: NgZone) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.userId = id;
      this.unsubscribe = onSnapshot(
        doc(this.firestore, "user", id),
        (docSnap) => {
          this.zone.run(() => {
            this.userInfo = docSnap.data();
          });
        }
      );
    });
  }

  openUserEditor() {
   this.dialog.open(EditUserInfo, {
    data: {
      user: this.userInfo,
      userId: this.userId
    }
    });
  }
 

  ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
