import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/components/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts$().subscribe((data) => {
      //console.log('all products', data);
      this.products = data;
    });
    this.productService.fetchProducts();
  }

  ngOnDestroy(): void {}
}
