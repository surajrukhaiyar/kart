import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        console.log("matches");
        return [{ title: 'Card 1', cols: 4, rows: 1}];
      }
      console.log("not matches");
      return this.itemService.getAllItems();
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private itemService: ItemService) {}
}
