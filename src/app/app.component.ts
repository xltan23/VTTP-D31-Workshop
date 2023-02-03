import { Component } from '@angular/core';
import { CustomerSelection } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D31W';

  // This is the cart content that will constantly be updated and input into cart.component
  content:CustomerSelection[] = []

  // Receives CustomerSelection (Event) from inventory.component
  // Performs the addition of item into cart
  selected(selection:CustomerSelection) {
    console.info('>>> app.component selected: ', selection)
    this.content.push(selection)
  }

  // Receives number (Event) from cart.component
  // Performs the deletion of item from cart
  deleteItem(i:number) {
    // At position i remove 1 item
    this.content.splice(i,1)
  }
}
