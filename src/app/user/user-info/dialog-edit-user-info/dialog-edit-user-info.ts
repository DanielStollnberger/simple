import { Component, Inject, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../../modals/user.class';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { collection, doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-user-info',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule
  ],
  templateUrl: './dialog-edit-user-info.html',
  styleUrl: './dialog-edit-user-info.scss',
})
export class EditUserInfo {
  firestore: Firestore = inject(Firestore);
  readonly dialogRef = inject(MatDialogRef<MatDialog>);
  loading = false;

  readonly data = inject(MAT_DIALOG_DATA);
  readonly userData = model(this.data.userData);
  userDataInfo = new User(this.data.user);
  userId = this.data.userId;
  constructor() {
    this.userDataInfo.birthdate = new Date(this.data.user.birthdate)
  }

  async saveUser() {
    this.loading = true;
    await updateDoc(
      doc(this.firestore, "user", this.userId),
      this.userDataInfo.toJSON()
    );

    this.loading = false;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
