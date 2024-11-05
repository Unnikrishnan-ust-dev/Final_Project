import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUpdateFormComponent } from './service-update-form.component';

describe('ServiceUpdateFormComponent', () => {
  let component: ServiceUpdateFormComponent;
  let fixture: ComponentFixture<ServiceUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceUpdateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
