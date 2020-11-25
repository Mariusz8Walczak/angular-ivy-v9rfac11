import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../shared/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public items = [];

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.itemService.getItems();
  }

}
