import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../environments/environment.development";
import { Product } from "../models/product.model";

@Injectable({
   providedIn: 'root'
})

export class ProductService {
   private readonly _httpClient : HttpClient = inject(HttpClient);

   private url: string = `${environment.url}/produtos`;

   GetProducts(){
      return this._httpClient.get<Product[]>(this.url);
   }
}