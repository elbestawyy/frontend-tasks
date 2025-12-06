import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css',
})
export class ProductCreate {
  newProduct = { name: '', price: 0 };

  constructor(private productService: ProductService, private router: Router) {}

  createProduct() {
    this.productService.createProduct(this.newProduct).subscribe(() => {
      alert('Product created successfully!');
      this.router.navigate(['/products']);
    });
  }

}
