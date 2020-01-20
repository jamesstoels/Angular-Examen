import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {

   private productsServiceURI: string = 'http://localhost:3000/products';

   constructor(private http:HttpClient) {}
   getAllProducts(): Product[]  {
      var producten=[new Product("naam1","brand1","descr1",1),new Product("naam2","brand2","descr2",2)];
      return producten;
   }
}
