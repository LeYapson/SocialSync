import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailFullComponent } from './profile-detail-full.component';

describe('ProfileDetailFullComponent', () => {
  let component: ProfileDetailFullComponent;
  let fixture: ComponentFixture<ProfileDetailFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDetailFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDetailFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
