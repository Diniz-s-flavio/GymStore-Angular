import { Component } from '@angular/core';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  //Product Seed
    product1 = new Product(
      "Haltere",
      150.10, 
      "Halteres são um tipo de equipamento que se adapta a vários tipos de treino. No momento em que cada carga atende a uma necessidade é fundamental possuir um kit de alteres com pesos entre 1 a até 10 quilos.",
      "../../assets/img/halteres1.jpg",
      13.00,
      16,
      "Fortex",
      7,
      true);

    product2 = new Product(
      'Esteira Elétrica',
      999.99,
      'Uma esteira elétrica de alta qualidade para corridas e caminhadas.',
      'esteira.jpg',
      50.5,
      25,
      'Marca A',
      12,
      true
    );
    
    product3 = new Product(
      'Bicicleta Ergométrica',
      799.99,
      'Uma bicicleta ergométrica para treinamento cardiovascular.',
      'bicicleta.jpg',
      38.0,
      20,
      'Marca B',
      10,
      true
    );
    
    product4 = new Product(
      'Máquina de Musculação',
      1499.99,
      'Uma máquina de musculação versátil para treinamento de força.',
      'maquina.jpg',
      100.0,
      10,
      'Marca C',
      8,
      true
    );
    
    product5 = new Product(
      'Pesos Livres',
      199.99,
      'Um conjunto de pesos livres para treinamento de força.',
      'pesos.jpg',
      30.0,
      50,
      'Marca D',
      0,
      true
    );
    
    product6 = new Product(
      'Bola de Pilates',
      19.99,
      'Uma bola de pilates para exercícios de equilíbrio e flexibilidade.',
      'bola.jpg',
      2.0,
      100,
      'Marca E',
      0,
      true
    );
    
    product7 = new Product(
      'Barra de Pull-Up',
      49.99,
      'Uma barra de pull-up para exercícios de costas e braços.',
      'pullup.jpg',
      5.0,
      30,
      'Marca F',
      0,
      true
    );
    
    product8 = new Product(
      'Kettlebell',
      29.99,
      'Um kettlebell para exercícios de força e resistência.',
      'kettlebell.jpg',
      10.0,
      40,
      'Marca G',
      0,
      true
    );
    
    product9 = new Product(
      'Step Aeróbico',
      34.99,
      'Um step aeróbico para exercícios cardiovasculares.',
      'step.jpg',
      5.5,
      25,
      'Marca H',
      0,
      true
    );
    
    product10 = new Product(
      'Luvas de Musculação',
      9.99,
      'Luvas de musculação para proteger as mãos durante o treinamento.',
      'luvas.jpg',
      0.5,
      100,
      'Marca I',
      0,
      true
    );
    
    product11 = new Product(
      'Tapete de Yoga',
      19.99,
      'Um tapete de yoga para prática de exercícios de alongamento.',
      'yoga.jpg',
      3.0,
      50,
      'Marca J',
      0,
      true
    );
    
    product12 = new Product(
      'Monitor Cardíaco',
      59.99,
      'Um monitor cardíaco para acompanhar a frequência cardíaca durante o exercício.',
      'monitor.jpg',
      0.2,
      30,
      'Marca K',
      0,
      true
    );
}
