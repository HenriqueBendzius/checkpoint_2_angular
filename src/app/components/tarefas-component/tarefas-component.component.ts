import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Tarefa } from '../../interfaces/Tarefa';
import { TarefaService } from '../../services/tarefa-service.service';


@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefas-component.component.html',
  styleUrl: './tarefas-component.component.css',
})
export class TarefasComponentComponent {
  tarefa: Tarefa[] = [];
  tarefaForm: FormGroup = new FormGroup({});

  constructor(
    private tarefaService: TarefaService,
    private formBuilder: FormBuilder
  ) {
    this.tarefaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      data_vencimento: ['', Validators.required],
    });
  }

  generateRandomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  inserir(): void {
    if (this.tarefaForm.valid) {
      const novaTarefa: Tarefa = {
        titulo: this.tarefaForm.value.titulo,
        descricao: this.tarefaForm.value.descricao,
        data_vencimento: this.tarefaForm.value.data_vencimento,
        id: this.generateRandomString(6),
      };

      this.tarefaForm.reset();
      this.tarefaService.adicionar(novaTarefa);
      alert('Tarefa cadastrada com sucesso!');
    } else {
      alert('preencher todos os campos');
    }
  }

  listar(): void {
    this.tarefa = this.tarefaService.listar();
  }

  remover(id: string): void {
    this.tarefaService.remover(id);
    alert('removido com sucesso');
  }

  ngOnInit(): void {
    this.listar();
  }
}
