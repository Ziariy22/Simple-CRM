import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss']
})
export class DialogDeleteUserComponent implements OnInit {
  user = new User();
  userId: any = [];

  constructor(public dialogRef: MatDialogRef<DialogDeleteUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .delete()
      .then(() => {
        this.dialogRef.close();
      });
  }

}
