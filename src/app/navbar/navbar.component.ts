import {Component} from '@angular/core';
import {ComponentService} from "../component.service";
import {DataService} from "../data.service";
import {Page} from "../Page";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  protected readonly Page = Page;

  constructor(public componentService: ComponentService, public dataService: DataService) {
  }
}
