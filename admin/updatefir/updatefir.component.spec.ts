import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefirComponent } from './updatefir.component';

describe('UpdatefirComponent', () => {
  let component: UpdatefirComponent;
  let fixture: ComponentFixture<UpdatefirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatefirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
