import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/components/models';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  constructor(private route: ActivatedRoute, private srv: ProductService) {}

  id: string = '';
  selectedProduct?: IProduct;

  ngOnInit() {
    this.id = this.route.snapshot.url[2].path;

    this.srv.getSingleProduct$(this.id).subscribe((data) => {
      console.log('all products', data);
      this.selectedProduct = data;
    });
  }
}
