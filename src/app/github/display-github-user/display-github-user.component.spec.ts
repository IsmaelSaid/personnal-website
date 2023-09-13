/**
 * TODO : Improve the testing of the component.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayGithubUserComponent } from './display-github-user.component';

describe('DisplayGithubUserComponent', () => {
  let component: DisplayGithubUserComponent;
  let fixture: ComponentFixture<DisplayGithubUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGithubUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayGithubUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
