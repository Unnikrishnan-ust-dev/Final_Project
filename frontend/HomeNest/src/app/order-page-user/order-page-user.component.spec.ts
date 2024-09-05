import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPageUserComponent } from './order-page-user.component';

describe('OrderPageUserComponent', () => {
  let component: OrderPageUserComponent;
  let fixture: ComponentFixture<OrderPageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderPageUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
