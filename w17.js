
  const infoAudi = document.querySelector('.infoAudi');
  const infoMercedes = document.querySelector('.infoMercedes');
  const infoBikeOne = document.querySelector('.infoBikeOne');
  const infoBikeTwo = document.querySelector('.infoBikeTwo');


  class Transport{
    constructor(type, price, brand){
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getInfo(){
        return `тип: ${this.type}, бренд: ${this.brand}`;
    }
        getPrice(){
        return `Цена: ${this.price}`;
  
    }
  }

  class Car extends Transport{
    constructor(type, price, brand,doors){
        super(type, price, brand);
        this.doors = doors;
    }
    getDoorsCount(){
        return `Количество дверей: ${this.doors}`;
    }
  }

  class Bike extends Transport{
    constructor(type, price, brand,maxSpeed){
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
        return `Максимальная скорость: ${this.maxSpeed}`;
    }
  }

  const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

const audi = new Car('car', 4300000,'Audi',4);
const mercedes  = new Car('car',2800000,'Mercedes-Benz',4);
const harleyOne = new Bike('bike', 1300000,'Harley-Davidson',210);
const  harleyTwo = new Bike('bike', 1400000,'Harley-Davidson',220)

function getInfoAudi(){
    infoAudi.textContent = `Общая информация: ${audi.getInfo()}; ${audi.getPrice()}; ${audi.getDoorsCount()}`;
}
function getInfoMercedes(){
    infoMercedes.textContent = `Общая информация: ${mercedes.getInfo()}; ${mercedes.getPrice()}; ${mercedes.getDoorsCount()}`;
}

function getInfoBikeOne(){
    infoBikeOne.textContent = `Общая информация: ${harleyOne.getInfo()}; ${harleyOne.getPrice()}; ${harleyOne.getMaxSpeed()}`;
}

function  getInfoBikeTwo(){
    infoBikeTwo.textContent = `Общая информация: ${harleyTwo.getInfo()}; ${harleyTwo.getPrice()}; ${harleyTwo.getMaxSpeed()}`;
}

    getInfoAudi();
    getInfoMercedes();
    getInfoBikeOne();
    getInfoBikeTwo();

