import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../../medicine-search/src/app/app.component';
import { SearchComponent } from '../../../medicine-search/src/app/search/search.component';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Updated import
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { MedicineSuggestionsComponent } from '../../../medicine-search/src/app/medicine-suggestions/medicine-suggestions.component';
import { HeaderComponent } from '../../../medicine-search/src/app/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MedicineSuggestionsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }