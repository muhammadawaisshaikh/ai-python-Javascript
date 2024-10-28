import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBasedGeminiComponent } from './text-based-gemini.component';

describe('TextBasedGeminiComponent', () => {
  let component: TextBasedGeminiComponent;
  let fixture: ComponentFixture<TextBasedGeminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBasedGeminiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBasedGeminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
