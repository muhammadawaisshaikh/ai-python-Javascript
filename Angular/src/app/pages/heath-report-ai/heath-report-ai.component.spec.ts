import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeathReportAiComponent } from './heath-report-ai.component';

describe('HeathReportAiComponent', () => {
  let component: HeathReportAiComponent;
  let fixture: ComponentFixture<HeathReportAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeathReportAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeathReportAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
