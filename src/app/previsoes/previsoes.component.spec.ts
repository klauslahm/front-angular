import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisoesComponent } from './previsoes.component';

describe('PrevisoesComponent', () => {
  let component: PrevisoesComponent;
  let fixture: ComponentFixture<PrevisoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevisoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevisoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
