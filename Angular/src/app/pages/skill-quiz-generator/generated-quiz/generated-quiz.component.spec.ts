import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedQuizComponent } from './generated-quiz.component';

describe('GeneratedQuizComponent', () => {
  let component: GeneratedQuizComponent;
  let fixture: ComponentFixture<GeneratedQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratedQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
