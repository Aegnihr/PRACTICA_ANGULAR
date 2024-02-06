import { Component } from '@angular/core';
import { Products } from '../models/producto.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
  Product: Products = new Products(0, "", 0, 0)
  ListOfProducts: Array<Products> = [
    new Products(1, "Botas Burton", 10, 250),
    new Products(2, "Snowboard Table Rossignol", 5, 500),
    new Products(3, "Snow Helmet Aoc", 20, 100),
    new Products(4, "Arcteryx Snow Pants", 15, 180),
    new Products(5, "Toogles", 30, 50)
  ];


  public addProduct(x: Products): void {
    if (this.ListOfProducts.find((element) => element.code == x.code)) {
      alert('This product code exists already')
    } else {
      this.ListOfProducts.push(x)
    }
  }

  public deleteProduct(x: number) {
    this.ListOfProducts.forEach((element: any, index: number) => {
      if (element.code == x) {
        this.ListOfProducts.splice(index, 1)
      }
    });

  }

  public selectProduct(x: number) {
    this.ListOfProducts.forEach((element: any) => {
      if (element.code == x) {
        this.Product = element;
      }
    });
  }

  public modifyProduct(x: Products) {
    if(this.ListOfProducts.find((element) => element.code == x.code)){
      this.ListOfProducts.forEach((element : any, index : number) => {
        if(element.code == x.code){
          this.ListOfProducts.splice(index, 1)
        }
      });
      this.ListOfProducts.push(x)
      this.ListOfProducts.sort((a, b) => a.code - b.code)
      alert("Product modified correctly")
    }else {
      alert("You cant change the code")
    }
  }
}

