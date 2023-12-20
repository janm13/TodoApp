import {Category} from "./Category";
import {Priority} from "./Priority";

export class Todo {

  done: boolean;
  priority = Priority.LOW;

  constructor(public id?: number, public label?: string, public deadline?: Date, public category?: Category) {
    this.done = false;
  }
}
