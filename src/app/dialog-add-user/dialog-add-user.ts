import { Component, inject } from '@angular/core';
import { MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { User } from '../modals/user.class';
import { UserComponent } from '../user/user';
import { Firestore, doc, addDoc, collection, onSnapshot, query } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-add-user',
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
  templateUrl: './dialog-add-user.html',
  styleUrl: './dialog-add-user.scss',
})
export class DialogAddUser {
  readonly dialogRef = inject(MatDialogRef<MatDialog>);
  firestore: Firestore = inject(Firestore);

  user = new User();
  loading = false;

  async saveUser() {
    this.loading = true;
    await addDoc(collection(this.firestore, "user"), this.user.toJSON())

    this.loading = false;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
