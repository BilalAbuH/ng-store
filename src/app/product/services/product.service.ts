import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Routes } from 'src/app/core/http/API';
import { IProduct } from 'src/app/shared/components/models';
import { PRODUCTS_MOCK } from './products.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts$(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(Routes['allProducts']);
  }

  public getSingleProduct$(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(Routes['singleProduct'](id));
  }
}
