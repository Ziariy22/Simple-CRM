import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss']
})
export class DialogAddTaskComponent implements OnInit {

  task = new Task();

  constructor(public dialogRef: MatDialogRef<DialogAddTaskComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveTask() {
   this.firestore
      .collection('tasks')
      .add(this.task.toJSON())
      .then((result: any) => {
        console.log('Adding user finished', result);
        this.dialogRef.close();
      });
  }

  

}
