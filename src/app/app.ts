import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('ConsumindoApiAngular');

  private readonly _productService = inject(ProductService);

  products: Product[] = []

  ngOnInit() {
    this._productService.GetProducts()
      .subscribe(_ => { this.products = _ })
  }
}
