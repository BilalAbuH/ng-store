import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/components/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  public productsSource: MatTableDataSource<IProduct> =
    new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'title',
    'price',
    'description',
    'category',
    'image',
    'star',
  ];

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private productService: ProductService, private router: Router) {}

  // ngAfterViewInit() {
  //   if (this.paginator) {
  //     this.productsSource.paginator = this.paginator;
  //   }

  //   // this.productsSource.sort = this.sort;
  // }

  ngOnInit(): void {
    this.productService.getProducts$().subscribe((data) => {
      console.log('all products', data);

      this.productsSource = new MatTableDataSource(data);

      if (this.paginator) {
        this.productsSource.paginator = this.paginator;
      }

      if (this.sort) this.productsSource.sort = this.sort;
    });
  }

  private initTable(data: IProduct[]): void {}

  public editProduct(id: string): void {
    this.router.navigate([]);
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.productsSource.filter = filterValue.trim().toLowerCase();

    if (this.productsSource.paginator) {
      this.productsSource.paginator.firstPage();
    }
  }
}
