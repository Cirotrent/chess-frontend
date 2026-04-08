import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaTorneiComponent } from './ricerca-tornei.component';

describe('RicercaTorneiComponent', () => {
  let component: RicercaTorneiComponent;
  let fixture: ComponentFixture<RicercaTorneiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RicercaTorneiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RicercaTorneiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
