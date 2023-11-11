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
    deliveryTax: number;
  
  
    constructor(name: string, price: number, description: string, image: string, weight: number, itemsAmount: number, brand: string, maxInstallmants:number, stockStatus:boolean, deliveryTax: number){
      this.name = name;
      this.price = price;
      this.description = description;
      this.image = image;
      this.weight = weight;
      this.itemsAmount = itemsAmount;
      this.brand = brand;
      this.maxInstallments = maxInstallmants;
      this.stockStatus = stockStatus;
      this.deliveryTax = deliveryTax;
    }

    brlConverter(valueNumber:number): any {
      let brlItemPrice = valueNumber.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
      let splitedBRLItemPrice = brlItemPrice.split(",");
      console.log(splitedBRLItemPrice.length);
      if (splitedBRLItemPrice.length == 1 ) {
        brlItemPrice = brlItemPrice+",00";
      }else if(splitedBRLItemPrice[1].length != 2){
          brlItemPrice = brlItemPrice+"0";
        
      }
      return  brlItemPrice;
     }
}