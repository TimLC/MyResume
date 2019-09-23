import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHobbieComponent } from './edit-hobbie.component';

describe('EditHobbieComponent', () => {
  let component: EditHobbieComponent;
  let fixture: ComponentFixture<EditHobbieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHobbieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHobbieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
