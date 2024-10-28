import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIntroTechnicalComponent } from './details-intro-technical.component';

describe('DetailsIntroTechnicalComponent', () => {
  let component: DetailsIntroTechnicalComponent;
  let fixture: ComponentFixture<DetailsIntroTechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsIntroTechnicalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsIntroTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
