import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { INVENTORIES } from '../inventoryExport';
import { CustomerSelection, Inventory } from '../models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  // Event to be fired
  @Output()
  onSelection = new Subject<CustomerSelection>();

  // VARIABLES
  quantity = 0;
  inventories:Inventory[] = INVENTORIES

  // OnClick this method is activated, which passes the name and quantity
  selected(name:string) {
    const selection = {
      name,
      quantity:this.quantity
    } as CustomerSelection
    // .next passes on selection (CustomerSelection) to app.component
    this.onSelection.next(selection)
  }

  // Method that adds or deducts from quantity
  addTo(i:number) {
    this.quantity+=i
  }
}
