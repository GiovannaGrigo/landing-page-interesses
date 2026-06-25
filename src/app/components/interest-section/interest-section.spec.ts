import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestSection } from './interest-section';

describe('InterestSection', () => {
  let component: InterestSection;
  let fixture: ComponentFixture<InterestSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestSection],
    }).compileComponents();

    fixture = TestBed.createComponent(InterestSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
