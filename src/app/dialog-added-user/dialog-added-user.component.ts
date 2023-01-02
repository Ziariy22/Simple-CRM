import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-added-user',
  templateUrl: './dialog-added-user.component.html',
  styleUrls: ['./dialog-added-user.component.scss']
})
export class DialogAddedUserComponent implements OnInit {
  
  userId: any = [];
  user = new User();
  loading = false;
  birthDate!: Date;

  constructor(public dialogRef: MatDialogRef<DialogAddedUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    this.firestore
    .collection('users')
    .doc(this.userId)
    .update(this.user.toJSON())
    .then(() => {
      this.loading = false;
      this.dialogRef.close();
    });
    }
}
