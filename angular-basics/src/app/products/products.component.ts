import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productList = [
    {
      prodId:'1',prodName:'Smart Watch',prodDesc:'Screen Length well Configured',prodPrice:50000
    },
    {
      prodId:'2',prodName:'ps4',prodDesc:'Inbuilt Processsor',prodPrice:60000
    },
    {
      prodId:'3',prodName:'Laptop',prodDesc:'Intel Processor',prodPrice:100000
    }
  ]
}
