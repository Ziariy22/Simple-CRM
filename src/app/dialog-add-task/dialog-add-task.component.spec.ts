import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { DialogAddTaskComponent } from './dialog-add-task.component';

describe('DialogAddTaskComponent', () => {
  let component: DialogAddTaskComponent;
  let fixture: ComponentFixture<DialogAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule, MatDialogModule],
      declarations: [DialogAddTaskComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
