import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneiListComponent } from './tornei-list.component';

describe('TorneiListComponent', () => {
  let component: TorneiListComponent;
  let fixture: ComponentFixture<TorneiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorneiListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorneiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
