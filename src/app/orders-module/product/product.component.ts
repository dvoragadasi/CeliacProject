import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './Product';
import { FormControl } from '@angular/forms';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  count = new FormControl('');
  @Output() addProduct = new EventEmitter();
  @Output() plusProduct = new EventEmitter();
  @Output() minusProduct = new EventEmitter();
  @Input() product: Product;
  public should_product = false;
  index = 0;


  constructor(private productsService: ProductsService) {
    this.count.setValue(this.index);
  }

  ngOnInit() {

  }

  Buy() {
    this.should_product = true;

  }
  plus() {
    if (this.index < 10) {
      this.index++;
      this.count.setValue(this.index);
      console.log(this.product.id);
      this.productsService.update_quantity(this.product.id, this.index);
      // alert(this.product.id+"fnu,"+this.product.quantity);
      this.plusProduct.emit(this.product.id)
    }
  }
  minus() {
    if (this.index > 0) {
      this.index--;
      this.count.setValue(this.index);
      this.productsService.update_quantity(this.product.id, this.index);
      this.minusProduct.emit(this.product.id)
    }
  }
  //add to cart
  add(){
    if(this.index>0)
      this.addProduct.emit(this.product.id)
      else
      alert("");
  }


}
