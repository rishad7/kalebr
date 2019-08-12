import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

declare var $: any;

@Component({
  selector: 'app-recentlyfeaturedbooks',
  templateUrl: './recentlyfeaturedbooks.component.html',
  styleUrls: ['./recentlyfeaturedbooks.component.scss']
})
export class RecentlyfeaturedbooksComponent implements OnInit {

  public search: string;
  public show_spinner: boolean;
  public show_msg: boolean;
  public book_details: any;
  public book_details_count: number;

  constructor(private books: BookService) {
    $('.rsd-footer').css('position', 'absolute');
    this.search = '';
    this.show_spinner = false;
    this.show_msg = false;
  }

  ngOnInit() {
  }

  // function for recently featured books. But, all the time it receiving empty data.
  recentlyFeaturedBooks() {
    this.show_msg = false;
    this.show_spinner = true;
    this.books.getRecentlyFeaturedBooks(this.search).subscribe((data) => {
      this.book_details = data.books;
      this.book_details_count = data.booksCount;
      this.show_spinner = false;
      if (this.book_details.length > 0) {
        $('.rsd-footer').css('position', 'relative');
        this.show_msg = false;
      } else {
        $('.rsd-footer').css('position', 'absolute');
        this.show_msg = true;
      }
    });
  }

}
