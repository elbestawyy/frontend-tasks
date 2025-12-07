import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { switchMap, of } from 'rxjs';
import 'tslib'; // Added import for tslib
@Component({
  selector: 'app-product-form',
  imports: [CommonModule, ReactiveFormsModule], // Removed Validators from imports
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductForm {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0.01)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    image: ['', [Validators.required, Validators.pattern('https?://.+')]],
    category: ['electronics', Validators.required]
  });

  productId = signal<number | null>(null);
  isEditMode = signal<boolean>(false);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor() {
    this.route.paramMap.pipe(
      switchMap((params: { get: (arg0: string) => any; }) => {
        const id = params.get('id');
        if (id) {
          this.isEditMode.set(true);
          this.productId.set(Number(id));
          this.loading.set(true);
          return this.productService.getProduct(Number(id));
        }
        return of(null);
      })
    ).subscribe({
      next: (product: any) => {
        if (product) {
          this.form.patchValue(product);
        }
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load product data.');
        this.loading.set(false);
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.error.set(null);
    const productData = {
      title: this.form.value.title || '',
      price: this.form.value.price || 0,
      description: this.form.value.description || '',
      image: this.form.value.image || '',
      category: this.form.value.category || 'electronics'
    };

    const operation = this.isEditMode()
      ? this.productService.updateProduct(this.productId()!, productData)
      : this.productService.createProduct(productData);

    operation.subscribe({
      next: () => this.router.navigate(['/products']),
      error: (err: any) => {
        this.error.set('Failed to save product. Please try again.');
        this.loading.set(false);
        console.error(err);
      }
    });
  }
}
