import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: any[] = [];

  constructor(private cd: ChangeDetectorRef
    , private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('Products after load:', this.products);

        // to detect changes
        this.cd.markForCheck();
      },
      error: (err) => console.error('API Error:', err),
    });
  }


  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
  }

}
