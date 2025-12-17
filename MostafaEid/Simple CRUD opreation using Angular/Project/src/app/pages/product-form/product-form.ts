import { Component, ChangeDetectionStrategy, effect, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule], // No ReactiveFormsModule or FormsModule needed
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductForm {
  // --- Inputs / Outputs ---
  product = input<any | null>(null);
  loading = input<boolean>(false);
  errorMessage = input<string | null>(null);

  save = output<any>();
  cancel = output<void>();

  // --- State Signals (Manual Field Management) ---
  title = signal('');
  price = signal<number>(0);
  image = signal('');
  description = signal('');
  category = signal('electronics');

  // Helper to trigger error display only after clicking submit
  showErrors = signal(false);

  constructor() {
    // Reset or Fill fields when the 'product' input changes
    effect(() => {
      const p = this.product();
      if (p) {
        this.title.set(p.title || '');
        this.price.set(p.price || 0);
        this.image.set(p.image || '');
        this.description.set(p.description || '');
        this.category.set(p.category || 'electronics');
      } else {
        // Reset fields for new product
        this.title.set('');
        this.price.set(0);
        this.image.set('');
        this.description.set('');
        this.category.set('electronics');
      }
      this.showErrors.set(false);
    });
  }

  // --- Manual Validation Logic ---
  get isTitleInvalid() { return !this.title() || this.title().length < 3; }
  get isPriceInvalid() { return !this.price() || this.price() <= 0; }
  get isImageInvalid() { return !this.image() || !/^https?:\/\/.+/.test(this.image()); }
  get isDescInvalid()  { return !this.description() || this.description().length < 10; }

  get isFormInvalid() {
    return this.isTitleInvalid || this.isPriceInvalid || this.isImageInvalid || this.isDescInvalid;
  }

  // --- Actions ---
  onSubmit(event: Event) {
    event.preventDefault(); // Prevent standard browser submit
    this.showErrors.set(true);

    if (this.isFormInvalid) return;

    const payload = {
      title: this.title(),
      price: this.price(),
      description: this.description(),
      image: this.image(),
      category: this.category()
    };

    this.save.emit(payload);
  }

  onCancel() {
    this.cancel.emit();
  }

  // --- Event Handlers for Inputs ---
  updateTitle(e: Event) { this.title.set((e.target as HTMLInputElement).value); }
  updatePrice(e: Event) { this.price.set(Number((e.target as HTMLInputElement).value)); }
  updateImage(e: Event) { this.image.set((e.target as HTMLInputElement).value); }
  updateDesc(e: Event)  { this.description.set((e.target as HTMLTextAreaElement).value); }
}
