import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfirdataComponent } from './showfirdata.component';

describe('ShowfirdataComponent', () => {
  let component: ShowfirdataComponent;
  let fixture: ComponentFixture<ShowfirdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowfirdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowfirdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
