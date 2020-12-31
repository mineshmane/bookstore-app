import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/bookservice/book.service'
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {

  constructor(private booService: BookService) { }

  ngOnInit() {
    this.getCartItems()
  }

  getCartItems() {
    this.booService.getCartItems().subscribe((res) => {
      console.log(" carts items ", res);

    })
  }
}
