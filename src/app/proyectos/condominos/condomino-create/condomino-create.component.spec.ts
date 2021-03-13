import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominoCreateComponent } from './condomino-create.component';

describe('CondominoCreateComponent', () => {
  let component: CondominoCreateComponent;
  let fixture: ComponentFixture<CondominoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondominoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
