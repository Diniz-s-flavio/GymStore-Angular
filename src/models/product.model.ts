export class Product {
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

    brlConverter(): any {
      let brlItemPrice = this.price.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
      let splitedBRLItemPrice = brlItemPrice.split(",");
      if (splitedBRLItemPrice[1].length != 2) {
        return brlItemPrice+"0";
      }
      return  brlItemPrice;
     }
   }