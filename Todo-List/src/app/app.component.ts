import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ItemComponent],
})
export class AppComponent {
  componentTitle = "My To Do List";

  filter: "all" | "active" | "done" = "all";

  allItems: Item[] = [];  // Explicitly typing the array as Item[]

  addItem(description: string): void {
    if (!description) return;

    this.allItems.unshift({
      description,
      done: false
    });
  }

  get items(): Item[] {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  remove(item: Item): void {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
