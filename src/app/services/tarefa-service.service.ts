import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  constructor() {}

  //Esta lista virá da API
  Tarefas: Tarefa[] = [];

  listar(): Tarefa[] {
    return this.Tarefas;
  }

  remover(id: string) {
    const Tarefa = this.Tarefas.find((c) => c.id == id);

    if (Tarefa) {
      const index = this.Tarefas.indexOf(Tarefa);
      this.Tarefas.splice(index, 1);
    }
  }

  adicionar(Tarefa: Tarefa) {
    this.Tarefas.push(Tarefa);
  }
}
