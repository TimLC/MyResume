import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLinkedinComponent } from './my-linkedin.component';

describe('MyLinkedinComponent', () => {
  let component: MyLinkedinComponent;
  let fixture: ComponentFixture<MyLinkedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLinkedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
