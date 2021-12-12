import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayinfoComponent } from './gatewayinfo.component';

describe('GatewayinfoComponent', () => {
  let component: GatewayinfoComponent;
  let fixture: ComponentFixture<GatewayinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
