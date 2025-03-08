import {FinanceCalculator, OrderManagement, Validator} from '../src/app';
describe('OrderManagement', () => {
    it('should add an order', () => {
        //Arrange
        const validator = new Validator([]);
        const calc = new FinanceCalculator();
        const OrderManager = new OrderManagement(validator, calc);
           
        const item = "Sponge";
        const price = 15;
        //Act
        OrderManager.addOrder(item, price);
        //Assert
        expect(OrderManager.getOrders()).toEqual([{ id: 1, item: "Sponge", price: 15 }]);
    });
it('should get an order', () => {
    //Arrange
    const validator = new Validator([]);
    const calc = new FinanceCalculator();
    const OrderManager = new OrderManagement(validator, calc);
    const item = "Sponge";
    const price = 15;
    OrderManager.addOrder(item, price);
    //Act
    const order = OrderManager.getOrder(1);
    //Assert
    expect(order).toEqual({ id: 1, item: "Sponge", price: 15 });
});
});


describe('FinanceCalculator', () => {
it('should get total revenue', () => {
   
    const calc = new FinanceCalculator();
    const orders = [
        { id: 1, item: "Sponge", price: 15 },
        { id: 2, item: "Chocolate", price: 20 },
        { id: 3, item: "Fruit", price: 18 },
        { id: 4, item: "Red Velvet", price: 25 },
        { id: 5, item: "Coffee", price: 8 },
    ];
   
    //Act
    const totalRevenue = calc.getRevenue(orders);
    //Assert
    expect(totalRevenue).toBe(86);  
    });
});