import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfirdataComponent } from './editfirdata.component';

describe('EditfirdataComponent', () => {
  let component: EditfirdataComponent;
  let fixture: ComponentFixture<EditfirdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfirdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditfirdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
