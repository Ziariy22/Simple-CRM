import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogAddedAddressComponent } from '../dialog-added-address/dialog-added-address.component';
import { DialogAddedUserComponent } from '../dialog-added-user/dialog-added-user.component';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: any = [];
  user = new User();

  constructor(public route: ActivatedRoute, 
  private firestore: AngularFirestore, 
  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      this.getUser();
    })
  }

  getUser() {
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((user: any) => {
      this.user = user;
    });
  }

  editMenu() {
    const dialog = this.dialog.open(DialogAddedAddressComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }


  editUserDetail() {
    const dialog = this.dialog.open(DialogAddedUserComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }

  openDeleteDialog() {
    this.dialog.open(DialogDeleteUserComponent);
  }
}
