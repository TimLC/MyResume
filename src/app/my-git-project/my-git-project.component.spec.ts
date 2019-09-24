import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGitProjectComponent } from './my-git-project.component';

describe('MyGitProjectComponent', () => {
  let component: MyGitProjectComponent;
  let fixture: ComponentFixture<MyGitProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGitProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGitProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
