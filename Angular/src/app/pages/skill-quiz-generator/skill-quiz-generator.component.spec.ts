import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillQuizGeneratorComponent } from './skill-quiz-generator.component';

describe('SkillQuizGeneratorComponent', () => {
  let component: SkillQuizGeneratorComponent;
  let fixture: ComponentFixture<SkillQuizGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillQuizGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillQuizGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
