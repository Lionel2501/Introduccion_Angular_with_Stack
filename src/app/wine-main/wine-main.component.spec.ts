import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineMainComponent } from './wine-main.component';

describe('WineMainComponent', () => {
  let component: WineMainComponent;
  let fixture: ComponentFixture<WineMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
