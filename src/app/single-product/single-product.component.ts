import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';

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
   "../../assets/img/produtos/halteres1.jpg",
   13.00,
   16,
   "Fortex",
   7,
   true,
   0.00);

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
    const selectValue = document.getElementById('buyingProductAmount') as HTMLSelectElement;

    const cepElement = document.getElementById('cepNumber') as HTMLInputElement;
    const cepNumbers = parseInt(cepElement.value);

    let cepStringNumbers:string;

    if (isNaN(cepNumbers)){
      alert('Preencha o CEP!!');
      return;
    }else{
      
      cepStringNumbers = cepNumbers.toString();
      if (cepStringNumbers.length!= 8){
        alert('O CEP deve conter 8 números!!');
        return;
      }
    }
    const cep = `${cepStringNumbers.substr(0, 5)}-${cepStringNumbers.substr(5, 3)}`;

    this.orderItemsAmount = parseInt(selectValue.value);
    let totalOrderItemValue = this.product.price* this.orderItemsAmount;
    alert("Comprando "+ this.product.name +": "+this.orderItemsAmount+" por R$" + this.product.brlConverter(totalOrderItemValue)+" Com "+((this.product.deliveryTax==0)? "entrega gratis":("R$ "+this.product.brlConverter(this.product.deliveryTax)+ "")) +" uma taxa de frete para entregar no CEP: " +cep)
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

  loadedImgOnSlider = document.getElementById('image-slider');

  imgs = [
    '../../assets/img/produtos/halteres1.jpg',
    '../../assets/img/produtos/halteres2.png',
    '../../assets/img/produtos/halteres3.png',
  ];

  currentPosition = 0;

  showCurrentImg(): void {
    const imageSlider = document.getElementById('image-slider') as HTMLImageElement;
    imageSlider.src = this.imgs[this.currentPosition];
  }

  previousImg(): void {
    this.currentPosition = (this.currentPosition - 1 + this.imgs.length) % this.imgs.length;
    this.showCurrentImg();
  }

  nextImg(): void {
    this.currentPosition = (this.currentPosition + 1) % this.imgs.length;
    this.showCurrentImg();

  }
  
}