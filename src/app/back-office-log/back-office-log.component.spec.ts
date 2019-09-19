import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficeLogComponent } from './back-office-log.component';

describe('BackOfficeLogComponent', () => {
  let component: BackOfficeLogComponent;
  let fixture: ComponentFixture<BackOfficeLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackOfficeLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
