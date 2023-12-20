import {Component} from '@angular/core';
import {DataService} from "../data.service";
import {Todo} from "../Todo";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Priority} from "../Priority";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  protected readonly Priority = Priority;

  constructor(public dataService: DataService) {
  }

  get todos(): Todo[] {
    return this.dataService.todos;
  }

  delete(todo: Todo) {
    this.dataService.delete(todo);
  }
}
