import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfuctPageComponent } from './profuct-page.component';

describe('ProfuctPageComponent', () => {
  let component: ProfuctPageComponent;
  let fixture: ComponentFixture<ProfuctPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfuctPageComponent]
    });
    fixture = TestBed.createComponent(ProfuctPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
