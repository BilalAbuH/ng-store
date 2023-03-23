import { Component, Input } from '@angular/core';
import { IProduct, IRating } from '../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product?: IProduct;

  // _title: string = '';
  // _price: number = 0;
  // _description: string = '';
  // _category: string = '';
  // _image: string = '';
  // _rating?: IRating;
}
