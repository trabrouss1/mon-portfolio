import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormation } from './card-formation';

describe('CardFormation', () => {
  let component: CardFormation;
  let fixture: ComponentFixture<CardFormation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFormation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFormation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
