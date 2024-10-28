import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFunctionCardComponent } from './details-function-card.component';

describe('DetailsFunctionCardComponent', () => {
  let component: DetailsFunctionCardComponent;
  let fixture: ComponentFixture<DetailsFunctionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsFunctionCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsFunctionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
