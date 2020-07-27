// 代驾
class Car { // 车辆
    public carName
    constructor(carName){
        this.carName = carName 
    }
}
interface IDriver { // 汽车驾驶
    driveCar()
}
class DrinkedDriver implements IDriver { // 醉酒司机
    private car: Car // 车辆
    constructor(car: Car){
        this.car = new Car(car)
    }
    public driveCar() {
        console.log('酒驾')
    }
}
class ProxyDriver implements IDriver { // 代驾司机
    private drinkedDriver: DrinkedDriver // 客户
    constructor(drinkedDriver: DrinkedDriver){
        this.drinkedDriver = drinkedDriver
    }
    public driveCar() {
        this.drinkedDriver.driveCar()
        console.log('代驾')
    }
}
const drinkedDriverCar = new Car('酒驾司机车辆')
const drinkedDriver = new DrinkedDriver(drinkedDriverCar)
const proxyDriver = new ProxyDriver(drinkedDriver)