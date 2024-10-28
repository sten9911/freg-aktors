import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutFunctionsComponent } from './home-about-functions.component';

describe('HomeAboutFunctionsComponent', () => {
  let component: HomeAboutFunctionsComponent;
  let fixture: ComponentFixture<HomeAboutFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAboutFunctionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAboutFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
