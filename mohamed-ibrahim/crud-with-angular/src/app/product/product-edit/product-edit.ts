import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.css',
})
export class ProductEdit {
  productId: string | null = null;
  product: any = { name: '', price: 0 };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // Get the ID from the route
    const idString = this.route.snapshot.paramMap.get('id');

    if (idString) {
      this.productId = idString;

      // Fetch the product
      this.productService.getProductById(idString).subscribe({
        next: (data) => {
          this.product.name = data.name;
          this.product.price = data.price;
          this.cd.markForCheck();

        },
        error: (err) => console.error(err),
      });
    }

  }

  updateProduct() {
    if (!this.productId) return;

    this.productService.updateProduct(this.productId, this.product).subscribe({
      next: () => {
        alert('Product updated successfully!');
        this.router.navigate(['/products']);
      },
      error: (err) => console.error('Error updating product', err),
    });
  }







}
