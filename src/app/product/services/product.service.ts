import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, delay, of } from 'rxjs';
import { Routes } from 'src/app/core/http/API';
import { IProduct } from 'src/app/shared/components/models';
import { PRODUCTS_MOCK } from './products.mock';
import { StorageService } from 'src/app/core/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  private productsSubject$: Subject<IProduct[]> = new Subject();

  public getProducts$(): Observable<IProduct[]> {
    //this.fechProducts();
    //return of(PRODUCTS_MOCK);
    return this.productsSubject$.asObservable();
  }

  public getSingleProduct$(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(Routes['singleProduct'](id));
  }

  public fetchProducts(): void {
    const existingData: IProduct[] = this.storageService.getData('products');

    if (existingData) {
      this.productsSubject$.next(existingData);
    } else {
      of(PRODUCTS_MOCK).subscribe((data) => {
        //this.storageService.setData('products'), data)
        this.storageService.setData('products', data);
        this.productsSubject$.next(data);
      });
    }
    //http
    //this.http.get.observabkle[]>(Routes['allProducts'])
    //.suscribe(data) => {

    //}

    //JSON
  }
}
