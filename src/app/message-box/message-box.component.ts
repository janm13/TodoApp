import {Component} from '@angular/core';
import {DataService} from "../data.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-message-box',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.css'
})
export class MessageBoxComponent {

  constructor(public dataService: DataService) {
  }
}
