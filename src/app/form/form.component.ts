import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DataService} from "../data.service";
import {Priority} from "../Priority";
import {NgForOf} from "@angular/common";
import {Todo} from "../Todo";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  label = "";
  deadline = new Date();
  category = this.dataService.categories[0];
  priority = Priority.LOW;
  protected readonly Priority = Priority;

  constructor(public dataService: DataService) {
  }

  create() {
    if (this.label.length == 0) {
      this.dataService.setMessageBoxMessage("Der Name darf nicht leer sein");
      return;
    }
    let todo = new Todo(this.dataService.findNextId(), this.label, this.deadline, this.category!);
    todo.priority = this.priority;
    this.dataService.add(todo);
  }
}
