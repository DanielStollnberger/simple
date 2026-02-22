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
  ],
  templateUrl: './dialog-add-user.html',
  styleUrl: './dialog-add-user.scss',
})
export class DialogAddUser {
  readonly dialogRef = inject(MatDialogRef<MatDialog>);
  birthdate: any;

  user = new User();
  saveUser() {
    if (this.user.birthdate) {
    this.user.birthdate = this.birthdate.getTime();
    }
    console.log(
      this.user
    );
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
