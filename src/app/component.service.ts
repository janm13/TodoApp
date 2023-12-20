import {Injectable} from '@angular/core';
import {Page} from "./Page";

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  page: Page = Page.LIST;

  public setPage(page: Page) {
    this.page = page;
  }

  public getPage() {
    return this.page;
  }
}
