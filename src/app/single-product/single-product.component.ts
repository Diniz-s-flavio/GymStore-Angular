import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{

  ngOnInit(){
    this.toggleStockStats();
  }

  product = new Product(
  "Haltere",
   150.10, 
   "Halteres são um tipo de equipamento que se adapta a vários tipos de treino. No momento em que cada carga atende a uma necessidade é fundamental possuir um kit de alteres com pesos entre 1 a até 10 quilos.",
   "../../assets/img/halteres1.jpg",
   13.00,
   16,
   "Fortex",
   7,
   true);

   brlConverter(itemPrice:number): any {
    let brlItemPrice = itemPrice.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    let splitedBRLItemPrice = brlItemPrice.split(",");
    if (splitedBRLItemPrice[1].length != 2) {
      return brlItemPrice+"0";
    }
    return  brlItemPrice;
   }

   installmentsAmount = 7;
   orderItemsAmount = 1;

   calcTotalOrderItemValue(itemPrice:number, buyingProductAmount:number): any{
    return itemPrice * buyingProductAmount; 
   }

   calcInstallmentsValue(itemPrice:number, installmentsQuantity: number, buyingProductAmount:number): any{
    let totalItemPrice = this.calcTotalOrderItemValue(itemPrice, buyingProductAmount); 
    let installmentsValue = totalItemPrice / installmentsQuantity;
    return installmentsValue;
   }

   buyProduct():any{
    const selectValue = document.getElementById('buyingProductAmount') as HTMLSelectElement
    this.orderItemsAmount = parseInt(selectValue.value);
    let totalOrderItemValue = this.product.price* this.orderItemsAmount;
    alert("Comprando "+ this.product.name +": "+this.orderItemsAmount+" por R$" +this.brlConverter(totalOrderItemValue))
   }
  
   toggleStockStats(): void{
    let stockStatsStats = document.querySelector('.stock-status');
    if(this.product.stockStatus){
      if (stockStatsStats?.classList.contains('stockPositive') &&!stockStatsStats?.classList.contains('stockNegative')){
      }else{
        if (!stockStatsStats?.classList.contains('stockPositive') &&stockStatsStats?.classList.contains('stockNegative')){
          stockStatsStats?.classList.remove('stockNegative');
          stockStatsStats?.classList.add('stockPositive');
        }else{
        stockStatsStats?.classList.add('stockPositive');
      }
      }

    }else{
      if (stockStatsStats?.classList.contains('stockNegative') &&!stockStatsStats?.classList.contains('stockPositive')){
      }else{
        if (!stockStatsStats?.classList.contains('stockNegative') &&stockStatsStats?.classList.contains('stockPositive')){
          stockStatsStats?.classList.remove('stockPositive');
          stockStatsStats?.classList.add('stockNegative');
        }else{
          stockStatsStats?.classList.add('stockNegative');
        }
      }
    } 
  }
}
 class Product {
  name: string;
  price: number;
  description: string;
  image: string;
  weight: number;
  itemsAmount: number;
  brand: string;
  maxInstallments: number;
  stockStatus: boolean;


  constructor(name: string, price: number, description: string, image: string, weight: number, itemsAmount: number, brand: string, maxInstallmants:number, stockStatus:boolean){
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.weight = weight;
    this.itemsAmount = itemsAmount;
    this.brand = brand;
    this.maxInstallments = maxInstallmants;
    this.stockStatus = stockStatus;
  }
 }