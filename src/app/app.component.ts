import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MedicineSuggestionsComponent } from './medicine-suggestions/medicine-suggestions.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [SearchComponent, MedicineSuggestionsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MedSearch';
}
