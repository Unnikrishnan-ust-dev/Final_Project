import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestJobsComponent } from './latest-jobs.component';

describe('LatestJobsComponent', () => {
  let component: LatestJobsComponent;
  let fixture: ComponentFixture<LatestJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
