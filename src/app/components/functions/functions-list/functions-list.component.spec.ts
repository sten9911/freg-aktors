import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsListComponent } from './functions-list.component';

describe('FunctionsListComponent', () => {
  let component: FunctionsListComponent;
  let fixture: ComponentFixture<FunctionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
