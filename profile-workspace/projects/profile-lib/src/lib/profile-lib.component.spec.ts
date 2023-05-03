import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLibComponent } from './profile-lib.component';

describe('ProfileLibComponent', () => {
  let component: ProfileLibComponent;
  let fixture: ComponentFixture<ProfileLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
