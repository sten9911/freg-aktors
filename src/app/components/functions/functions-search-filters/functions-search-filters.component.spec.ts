import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsSearchFiltersComponent } from './functions-search-filters.component';

describe('FunctionsSearchFiltersComponent', () => {
  let component: FunctionsSearchFiltersComponent;
  let fixture: ComponentFixture<FunctionsSearchFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionsSearchFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionsSearchFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
