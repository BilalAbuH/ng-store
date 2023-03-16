import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  displayedColumns: string[] = ['description', 'category', 'image', 'menu'];

  constructor(private productsService: ProductService) {}
  public products: IProduct[] = [];
  dataSource = new MatTableDataSource(this.products);

  ngOnInit(): void {
    this.productsService.getProducts$().subscribe((data) => {
      console.log('Admin', data);
      this.products = data;
      this.dataSource = new MatTableDataSource(this.products);
      console.log(data);
    });
  }

  ngOnDestroy(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
