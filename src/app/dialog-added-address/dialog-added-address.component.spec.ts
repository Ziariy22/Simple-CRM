import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { DialogAddedAddressComponent } from './dialog-added-address.component';

describe('DialogAddedAddressComponent', () => {
  let component: DialogAddedAddressComponent;
  let fixture: ComponentFixture<DialogAddedAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule, MatDialogModule],
      declarations: [DialogAddedAddressComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogAddedAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
