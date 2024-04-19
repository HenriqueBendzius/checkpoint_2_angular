import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasComponentComponent } from './tarefas-component.component';

describe('TarefasComponentComponent', () => {
  let component: TarefasComponentComponent;
  let fixture: ComponentFixture<TarefasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefasComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarefasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
