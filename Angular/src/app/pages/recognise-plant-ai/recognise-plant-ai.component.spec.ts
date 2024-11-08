import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognisePlantAiComponent } from './recognise-plant-ai.component';

describe('RecognisePlantAiComponent', () => {
  let component: RecognisePlantAiComponent;
  let fixture: ComponentFixture<RecognisePlantAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecognisePlantAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecognisePlantAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
