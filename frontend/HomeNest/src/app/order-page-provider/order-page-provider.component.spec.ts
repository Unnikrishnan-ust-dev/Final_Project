import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderOrdersComponent } from './order-page-provider.component';

describe('ProviderOrdersComponent', () => {
  let component: ProviderOrdersComponent;
  let fixture: ComponentFixture<ProviderOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
