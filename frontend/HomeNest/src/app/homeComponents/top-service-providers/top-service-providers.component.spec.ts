import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopServiceProvidersComponent } from './top-service-providers.component';

describe('TopServiceProvidersComponent', () => {
  let component: TopServiceProvidersComponent;
  let fixture: ComponentFixture<TopServiceProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopServiceProvidersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopServiceProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
