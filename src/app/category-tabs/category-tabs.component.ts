import {Component} from '@angular/core';
import {DataService} from "../data.service";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-category-tabs',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './category-tabs.component.html',
  styleUrl: './category-tabs.component.css'
})
export class CategoryTabsComponent {
  constructor(public dataService: DataService) {
  }
}
