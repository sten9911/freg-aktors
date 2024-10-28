import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSettingsComponent } from './header-settings.component';

describe('HeaderSettingsComponent', () => {
  let component: HeaderSettingsComponent;
  let fixture: ComponentFixture<HeaderSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
