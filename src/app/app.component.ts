import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefasComponentComponent } from './components/tarefas-component/tarefas-component.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TarefasComponentComponent]
})
export class AppComponent {
  title = 'new-app';
}
