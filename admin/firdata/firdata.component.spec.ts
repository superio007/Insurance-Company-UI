import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirdataComponent } from './firdata.component';

describe('FirdataComponent', () => {
  let component: FirdataComponent;
  let fixture: ComponentFixture<FirdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
