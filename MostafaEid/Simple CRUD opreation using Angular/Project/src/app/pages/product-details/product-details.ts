import { Component , ChangeDetectionStrategy, inject, signal} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { LoadingSpinner } from '../../components/loading-spinner/loading-spinner';
import { ConfirmationDialog} from '../../components/confirmation-dialog/confirmation-dialog';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-product-details',
  imports: [CommonModule,RouterLink,NgOptimizedImage,LoadingSpinner,ConfirmationDialog],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);

  product = signal<Product | null>(null);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);
  showDeleteConfirm = signal<boolean>(false);

  constructor() {
    this.route.paramMap.pipe(
      switchMap((params: { get: (arg0: string) => any; }) => {
        const id = Number(params.get('id'));
        this.loading.set(true);
        this.error.set(null);
        return this.productService.getProduct(id);
      })
    ).subscribe({
      next: (data: any) => {
        this.product.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load product details.');
        this.loading.set(false);
      }
    });
  }

  onDelete(): void {
    this.showDeleteConfirm.set(true);
  }

  onConfirmDelete(): void {
    const productToDelete = this.product();
    if (productToDelete) {
      this.productService.deleteProduct(productToDelete.id).subscribe({
        next: () => {
          this.router.navigate(['/products']);
        },
        error: (err: any) => {
          // In a real app, show a notification
          console.error('Failed to delete product', err);
          this.showDeleteConfirm.set(false);
        }
      });
    }
  }

  onCancelDelete(): void {
    this.showDeleteConfirm.set(false);
  }
}
