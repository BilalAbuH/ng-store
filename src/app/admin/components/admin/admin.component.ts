import { Component } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  public products: IProduct[] = [];

  constructor(private productsService: ProductService) {}
  ngOnInit(): void {
    this.productsService.getProducts$().subscribe((data) => {
      console.log('Admin', data);
      this.products = data;
      console.log(data);
    });
  }

  ngOnDestroy(): void {}
}
