import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineContactComponent } from './wine-contact.component';

describe('WineContactComponent', () => {
  let component: WineContactComponent;
  let fixture: ComponentFixture<WineContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
