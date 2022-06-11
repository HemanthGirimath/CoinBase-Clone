import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBoxComponent } from './transaction-box.component';

describe('TransactionBoxComponent', () => {
  let component: TransactionBoxComponent;
  let fixture: ComponentFixture<TransactionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
