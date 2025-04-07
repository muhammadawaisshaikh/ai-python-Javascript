import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerGeneratorAiComponent } from './banner-generator-ai.component';

describe('BannerGeneratorAiComponent', () => {
  let component: BannerGeneratorAiComponent;
  let fixture: ComponentFixture<BannerGeneratorAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerGeneratorAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerGeneratorAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
