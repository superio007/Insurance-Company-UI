import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirbyidComponent } from './firbyid.component';

describe('FirbyidComponent', () => {
  let component: FirbyidComponent;
  let fixture: ComponentFixture<FirbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
