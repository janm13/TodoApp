import {Injectable} from '@angular/core';
import {Todo} from "./Todo";
import {Category} from "./Category";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [];
  messageBoxMessage: string | undefined;
  categories: Category[] = [new Category('Hausarbeit')];
  currentCategory: Category | undefined;
  categoryName: string = "";

  constructor() {
    this.todos.push(new Todo(1, 'Platzhalter', new Date(), this.categories[0]));
  }

  public setMessageBoxMessage(message: string) {
    this.messageBoxMessage = message;
    new Promise(resolve => setTimeout(resolve, 5000)).then(d => {
      if (this.messageBoxMessage == message) {
        this.messageBoxMessage = undefined;
      }
    });
  }

  public getMessageBoxMessage(): string | undefined {
    return this.messageBoxMessage;
  }

  public addCategory() {
    if (this.categoryName.length == 0) {
      this.messageBoxMessage = "Der Name der Kategorie darf nicht leer sein";
      return;
    }
    if (this.categories.find(e => e.label == this.categoryName) !== undefined) {
      this.messageBoxMessage = "Diese Kategorie existiert bereits";
      return;
    }
    this.categories.push(new Category(this.categoryName));
    localStorage.setItem("categories", JSON.stringify(this.categories));
    this.categoryName = "";
  }

  public add(todo: Todo) {
    this.todos.push(todo);
    this.save();
    this.messageBoxMessage = "Todo hinzugefügt";
  }

  public delete(todo: Todo) {
    this.todos = this.todos.filter(e => e != todo);
    this.save();
    this.messageBoxMessage = "Todo entfernt";
  }

  public save() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  public todoList() {
    return this.todos;
  }

  findNextId(): number {
    let list = this.todos.map(todo => todo.id);
    let i = 1;
    while (list.includes(i)) {
      i++;
    }
    return i;
  }
}
