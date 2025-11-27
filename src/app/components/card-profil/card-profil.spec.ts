import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfil } from './card-profil';

describe('CardProfil', () => {
  let component: CardProfil;
  let fixture: ComponentFixture<CardProfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProfil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProfil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
