import { Component , ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  imports: [],
  templateUrl: './loading-spinner.html',
  styleUrl: './loading-spinner.css',
  template: `
    <div class="flex justify-center items-center p-8">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class LoadingSpinner {

}
