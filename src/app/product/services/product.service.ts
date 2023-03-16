import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/shared/models';
import { PRODUCTS_MOCK } from './products.mock';
import { HttpClient } from '@angular/common/http';
import { Routes } from 'src/app/core/http/API';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts$(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(Routes['allProducts']);
  }
}
