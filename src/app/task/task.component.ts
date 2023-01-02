import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';
import { DialogAddTaskComponent } from '../dialog-add-task/dialog-add-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task = new Task();
  allTasks:any = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
    .collection('tasks')
    .valueChanges({idField: 'customIdTask'})
    .subscribe((changes: any) => {
      this.allTasks = changes;
    });
  }

  openTaskDialog() {
    this.dialog.open(DialogAddTaskComponent);
  }

}
