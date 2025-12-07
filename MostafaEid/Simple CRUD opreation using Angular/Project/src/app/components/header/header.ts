import { Component ,ChangeDetectionStrategy, inject  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchService } from '../../services/search.service'; // Adjust the path accordingly

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Header {
  searchServic: SearchService = inject(SearchService);

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchServic.searchTerm.set(inputElement.value);
  }
}
