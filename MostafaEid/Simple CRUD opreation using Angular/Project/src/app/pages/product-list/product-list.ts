import { Component, ChangeDetectionStrategy, inject, signal, computed, effect } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SearchService } from '../../services/search.service';
import { Product } from '../../models/product.model';
import { LoadingSpinner } from '../../components/loading-spinner/loading-spinner';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,RouterLink,NgOptimizedImage,LoadingSpinner],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProductList {
  private productService = inject(ProductService);
  private searchService = inject(SearchService);

  products = signal<Product[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  filteredProducts = computed(() => {
    const term = this.searchService.searchTerm().toLowerCase();
    if (!term) {
      return this.products();
    }
    return this.products().filter((product: { title: string; description: string; }) =>
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  });

  constructor() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading.set(true);
    this.error.set(null);
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        this.products.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load products. Please try again later.');
        this.loading.set(false);
      }
    });
  }
}
