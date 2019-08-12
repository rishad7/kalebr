import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-criticreviewsofabook',
  templateUrl: './criticreviewsofabook.component.html',
  styleUrls: ['./criticreviewsofabook.component.scss']
})
export class CriticreviewsofabookComponent implements OnInit {

  public search: string;
  public show_spinner: boolean;
  public show_msg: boolean;
  public book_details: any;
  public total_results: number;
  public show_data: boolean;
  public all: number;
  public positive: number;
  public negative: number;

  constructor(private books: BookService, private route: ActivatedRoute) {
    $('.rsd-footer').css('position', 'absolute');
    this.search = '';
    this.show_spinner = false;
    this.show_msg = false;
    this.show_data = false;
    this.all = this.positive = this.negative = 0;
  }

  ngOnInit() {
    // storing parameter to id in url routing and setting that id as search and calling criticReviews() function
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.search = id;
      this.criticReviews();
    }
  }

  // function for get reviews of book.
  criticReviews() {
    this.show_msg = false;
    this.show_spinner = true;
    this.books.getCriticReviews(this.search).subscribe((data) => {
      this.book_details = data.book;
      this.total_results = data.total_results;
      this.show_spinner = false;
      if (this.total_results > 0) {
        $('.rsd-footer').css('position', 'relative');
        this.show_data = true;
        this.show_msg = false;
        for (let cr of this.book_details.critic_reviews) {
          this.all = this.all + 1;
          if (cr.pos_or_neg == 'Positive') {
            this.positive = this.positive + 1;
          } else {
            this.negative = this.negative + 1;
          }
        }
      } else {
        $('.rsd-footer').css('position', 'absolute');
        this.show_data = false;
        this.show_msg = true;
      }
    });
  }

}
