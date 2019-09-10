import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPictureComponent } from './profil-picture.component';

describe('ProfilPictureComponent', () => {
  let component: ProfilPictureComponent;
  let fixture: ComponentFixture<ProfilPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
