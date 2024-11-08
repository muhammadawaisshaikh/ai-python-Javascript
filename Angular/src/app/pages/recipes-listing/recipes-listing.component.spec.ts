import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListingComponent } from './recipes-listing.component';

describe('RecipesListingComponent', () => {
  let component: RecipesListingComponent;
  let fixture: ComponentFixture<RecipesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
