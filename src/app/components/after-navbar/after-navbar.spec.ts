import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterNavbar } from './after-navbar';

describe('AfterNavbar', () => {
  let component: AfterNavbar;
  let fixture: ComponentFixture<AfterNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
