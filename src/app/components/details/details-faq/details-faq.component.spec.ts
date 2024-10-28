import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFaqComponent } from './details-faq.component';

describe('DetailsFaqComponent', () => {
  let component: DetailsFaqComponent;
  let fixture: ComponentFixture<DetailsFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsFaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
