import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {ComponentService} from "./component.service";
import {Page} from "./Page";
import {ListComponent} from "./list/list.component";
import {FormComponent} from "./form/form.component";
import {SettingsComponent} from "./settings/settings.component";
import {MessageBoxComponent} from "./message-box/message-box.component";
import {CategoryTabsComponent} from "./category-tabs/category-tabs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ListComponent, FormComponent, SettingsComponent, MessageBoxComponent, CategoryTabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoApp';
  protected readonly Page = Page;

  constructor(public componentService: ComponentService) {
  }
}
