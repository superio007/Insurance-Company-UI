import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfirComponent } from './editfir.component';

describe('EditfirComponent', () => {
  let component: EditfirComponent;
  let fixture: ComponentFixture<EditfirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditfirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
