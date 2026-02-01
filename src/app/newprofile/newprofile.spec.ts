import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newprofile } from './newprofile';

describe('Newprofile', () => {
  let component: Newprofile;
  let fixture: ComponentFixture<Newprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newprofile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newprofile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
