import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkarts',
  templateUrl: './flipkarts.component.html',
  styleUrls: ['./flipkarts.component.css']
})
export class FlipkartsComponent {

  public name:string = ""
  public term: string = "";
  public flipkarts: any = [

    { productName: 'pen', price: 10, rating: 3, freeDelivery: true },
    { productName: 'phone', price: 10000, rating: 4.8, freeDelivery: false },
    { productName: 'shirt', price: 2000, rating: 3, freeDelivery: true },
    { productName: 'cap', price: 400, rating: 5, freeDelivery: true },
    { productName: 'mobile case', price: 100, rating: 4, freeDelivery: false },
    { productName: 'remote', price: 150, rating: 2, freeDelivery: true },
    { productName: 'watch', price: 3500, rating: 4, freeDelivery: false },
    { productName: 'mouse', price: 300, rating: 3.6, freeDelivery: false },
    { productName: 'pen', price: 50, rating: 3.2, freeDelivery: true }
  ]

  // filter
  filter() {
    this.flipkarts = this.flipkarts.filter((flipkart: any) => flipkart.productName.includes(this.term))
  }


  filterItems(){
    this.flipkarts = this.flipkarts.filter((item: any) => item.freeDelivery === true);
}
 
  // delete

  delete(i: number) {
    this.flipkarts.splice(i, 1);
  }

  // sort
  PriceLH() {
    this.flipkarts = this.flipkarts.sort((a: any, b: any) => a.price - b.price)
  }
  PriceHL() {
    this.flipkarts = this.flipkarts.sort((a: any, b: any) => b.price - a.price)
  }
  RatingLH() {
    this.flipkarts = this.flipkarts.sort((a: any, b: any) => a.rating - b.rating)
  }
  RatingHL() {
    this.flipkarts = this.flipkarts.sort((a: any, b: any) => b.rating - a.rating)
  }

  // 50% Discount
  discount() {
    this.flipkarts = this.flipkarts.map((flipkart: any) => {
      flipkart.price = flipkart.price / 2
      return flipkart;
    })
  }

  withDeliveryCharges() {
    this.flipkarts = this.flipkarts.map((flipkart: any) => {
      flipkart.price = flipkart.price + 30
      return flipkart
    })
  }

  //total price
  totalPrice() {
    let total = this.flipkarts.reduce((sum: any, flipkart: any) => sum + flipkart.price, 0)
    alert(total)
  }

  // total cart count
  totalCartItems() {
    let cartCount = this.flipkarts.length;
    alert(cartCount)
  }

}





