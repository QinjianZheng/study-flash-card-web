import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfcLibComponent } from './sfc-lib.component';

describe('SfcLibComponent', () => {
  let component: SfcLibComponent;
  let fixture: ComponentFixture<SfcLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfcLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfcLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
