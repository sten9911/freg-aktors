import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUsecasesComponent } from './details-usecases.component';

describe('DetailsUsecasesComponent', () => {
  let component: DetailsUsecasesComponent;
  let fixture: ComponentFixture<DetailsUsecasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsUsecasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsUsecasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
