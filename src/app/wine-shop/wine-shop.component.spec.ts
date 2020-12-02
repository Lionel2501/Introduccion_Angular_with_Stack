import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineShopComponent } from './wine-shop.component';

describe('WineShopComponent', () => {
  let component: WineShopComponent;
  let fixture: ComponentFixture<WineShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
