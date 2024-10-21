import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFunctionComponent } from './top-function.component';

describe('TopFunctionComponent', () => {
  let component: TopFunctionComponent;
  let fixture: ComponentFixture<TopFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopFunctionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
