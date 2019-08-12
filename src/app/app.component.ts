import { Component } from '@angular/core';
import { BookService } from './book.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public search_keyword = '';
  public show_autocomplete_div: boolean = false;
  public autocomplete_data = [];
  public search_title: string;
  public search_href: string;

  constructor(private books: BookService, private router: Router) { }

  // autocomplete search function
  keyPress(event: any) {
    setTimeout(() => {
      this.search_keyword = event.target.value;
      if (this.search_keyword.length >= 3) {
        this.books.getAutocompleteSearch(this.search_keyword).subscribe((data) => {
          this.autocomplete_data = data;
          this.show_autocomplete_div = true;
        });
      } else {
        this.show_autocomplete_div = false;
      }
    }, 100);
  }

  // redirecting to selected books from autocomplete search result
  selectedSearch(id: any) {
    this.search_title = $('#autocomplete_span_' + id).text();
    this.search_href = 'http://idreambooks.com' + $('#autocomplete_span_' + id).attr('data-id');
    $('#rsd_autocomplete_value').val('');
    this.show_autocomplete_div = false;
    this.autocomplete_data = [];
    this.router.navigate(['/crtic_reviews', this.search_title]);
  }

  // to hide autocomplete div if click outside of it
  onClickedOutside(e: Event) {
    this.show_autocomplete_div = false;
  }

}
