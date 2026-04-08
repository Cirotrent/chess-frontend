import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoAttivoComponent } from './torneo-attivo.component';

describe('TorneoAttivoComponent', () => {
  let component: TorneoAttivoComponent;
  let fixture: ComponentFixture<TorneoAttivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorneoAttivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorneoAttivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
