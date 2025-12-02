import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRealisation } from './card-realisation';

describe('CardRealisation', () => {
  let component: CardRealisation;
  let fixture: ComponentFixture<CardRealisation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRealisation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRealisation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
