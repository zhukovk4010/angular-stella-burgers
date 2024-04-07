import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientCategorySwitcherComponent } from './ingredient-category-switcher.component';

describe('IngredientCategorySwitcherComponent', () => {
  let component: IngredientCategorySwitcherComponent;
  let fixture: ComponentFixture<IngredientCategorySwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientCategorySwitcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngredientCategorySwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
