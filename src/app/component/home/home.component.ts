import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public recently_viewed_books = [];
  public default_genre: string;
  public show_spinner: boolean = true;

  constructor(private books: BookService) {
    $('.rsd-footer').css('position', 'relative');
    this.default_genre = 'all-books';
  }

  ngOnInit() {
    this.getRecentlyViewedBooks(); // calling initially when loading the page with genre 'all-books'
  }

  // fetching data for top bublications
  getRecentlyViewedBooks() {
    this.books.getBookData(this.default_genre).subscribe((data) => {
      this.recently_viewed_books = data;
      this.show_spinner = false;
    });
  }

  // call to this function in onchange of select
  getChangedRecentlyViewedBooks(event: any) {
    this.default_genre = event.target.value;
    this.show_spinner = true;
    this.getRecentlyViewedBooks();
  }

  // method for read more event. the content will expand and collapse with respect to the click
  readMore(id: any) {
    let next_id: any;
    if ($('#read_more_btn_' + id).text() == 'Read More') {
      $('#read_more_btn_' + id).text('Read Less');
      $('#read_more_text_' + id).removeClass('rsd-half-text');
      $('#read_more_text_' + id).addClass('rsd-full-text');
      if (id % 2 == 0) {
        next_id = id + 1;
        $('#rsd_card_div_' + next_id).css('margin-bottom', '30px');
      }
    } else {
      $('#read_more_btn_' + id).text('Read More');
      $('#read_more_text_' + id).removeClass('rsd-full-text');
      $('#read_more_text_' + id).addClass('rsd-half-text');
      if (id % 2 == 0) {
        next_id = id + 1;
        $('#rsd_card_div_' + next_id).css('margin-bottom', '0px');
      }
    }
  }

}
