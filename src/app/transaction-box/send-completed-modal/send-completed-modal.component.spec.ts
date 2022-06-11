import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCompletedModalComponent } from './send-completed-modal.component';

describe('SendCompletedModalComponent', () => {
  let component: SendCompletedModalComponent;
  let fixture: ComponentFixture<SendCompletedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendCompletedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendCompletedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
