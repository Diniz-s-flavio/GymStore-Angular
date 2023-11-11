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
      "../../assets/img/produtos/halteres1.jpg",
      13.00,
      16,
      "Fortex",
      7,
      true,
      0);

    product2 = new Product(
      'Esteira Elétrica',
      999.99,
      'Uma esteira elétrica de alta qualidade para corridas e caminhadas.',
      '../../assets/img/produtos/esteiraEletrica1.png',
      50.5,
      25,
      'Marca A',
      12,
      true,
      0
    );
    
    product3 = new Product(
      'Bicicleta Ergométrica',
      799.99,
      'Uma bicicleta ergométrica para treinamento cardiovascular.',
      '../../assets/img/produtos/bicicletaErgo1.png',
      38.0,
      20,
      'Marca B',
      10,
      true,
      0
    );
    
    product4 = new Product(
      'Máquina de Musculação',
      1499.99,
      'Uma máquina de musculação versátil para treinamento de força.',
      '../../assets/img/produtos/maquinaMuculacao1.png',
      100.0,
      10,
      'Marca C',
      8,
      true,
      0
    );
    
    product5 = new Product(
      'Pesos Livres',
      199.99,
      'Um conjunto de pesos livres para treinamento de força.',
      '../../assets/img/produtos/pesosLivres1.png',
      30.0,
      50,
      'Marca D',
      0,
      true,
      0
    );
    
    product6 = new Product(
      'Bola de Pilates',
      19.99,
      'Uma bola de pilates para exercícios de equilíbrio e flexibilidade.',
      '../../assets/img/produtos/bolaPilates1.png',
      2.0,
      100,
      'Marca E',
      0,
      true,
      0
    );
    
    product7 = new Product(
      'Barra de Pull-Up',
      49.99,
      'Uma barra de pull-up para exercícios de costas e braços.',
      '../../assets/img/produtos/barraPullup1.png',
      5.0,
      30,
      'Marca F',
      0,
      true,
      0
    );
    
    product8 = new Product(
      'Kettlebell',
      29.99,
      'Um kettlebell para exercícios de força e resistência.',
      '../../assets/img/produtos/kettlebell1.png',
      10.0,
      40,
      'Marca G',
      0,
      true,
      0
    );
    
    product9 = new Product(
      'Step Aeróbico',
      34.99,
      'Um step aeróbico para exercícios cardiovasculares.',
      '../../assets/img/produtos/stepAerobico1.png',
      5.5,
      25,
      'Marca H',
      0,
      true,
      0
    );
    
    product10 = new Product(
      'Luvas de Musculação',
      9.99,
      'Luvas de musculação para proteger as mãos durante o treinamento.',
      '../../assets/img/produtos/luvasMusculacao1.png',
      0.5,
      100,
      'Marca I',
      0,
      true,
      0
    );
    
    product11 = new Product(
      'Tapete de Yoga',
      19.99,
      'Um tapete de yoga para prática de exercícios de alongamento.',
      '../../assets/img/produtos/tapeteYoga1.png',
      3.0,
      50,
      'Marca J',
      0,
      true,
      0
    );
    
    product12 = new Product(
      'Monitor Cardíaco',
      59.99,
      'Um monitor cardíaco para acompanhar a frequência cardíaca durante o exercício.',
      '../../assets/img/produtos/monitorCardiaco1.png',
      0.2,
      30,
      'Marca K',
      0,
      true,
      0
    );
}
