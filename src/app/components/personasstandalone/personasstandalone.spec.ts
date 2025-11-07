import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personasstandalone } from './personasstandalone';

describe('Personasstandalone', () => {
  let component: Personasstandalone;
  let fixture: ComponentFixture<Personasstandalone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Personasstandalone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personasstandalone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
