// SOLID principles

// single responsibility principle (SRP)
// open/closed principle (OCP)
// liskov substitution principle (LSP)
// interface segregation principle (ISP)
// dependency inversion principle (DIP)

export interface Order {
  price: number;
  id: number;
  item: string;
}

export class OrderManagement {
  private orders: Order[] = [];
  constructor(private validator: IValidator, private calculator: ICalculator) {

  }
  getOrders() {
      return this.orders;
  }
  addOrder(item:string, price: number) {

      const order: Order = {id: this.orders.length + 1, item, price};
      this.validator.validate(order);
      this.orders.push(order);

  }
  getOrder(id: number) {
      return this.getOrders().find(order => order.id === id);
  }
  getTotalRevenue() {
      return this.calculator.getRevenue(this.orders);
  }
  getBuyPower() {
      return this.calculator.getAverageBuyPower(this.orders);
  }

};
export class PremiumOrderManagement extends OrderManagement {
  getOrder(id: number): Order | undefined {
      console.log("alert: premium order management is being fetched");
      return super.getOrder(id);

  }
}

interface IValidator {
  validate(order: Order): void;
}
interface IPossibleItems {
  getPossibleItems(): string[];
}

export class Validator implements IValidator {
  constructor(private rules: IValidator[]) {

  }
  validate(order: Order): void {
      this.rules.forEach(rule => rule.validate(order));
  };
};
  //validate item is possible
  export class ItemValidator implements IValidator, IPossibleItems {
      getPossibleItems(): string[] {
          return ItemValidator.possibleItems;
      }
      private static possibleItems = [
          "Sponge",
          "Chocolate",
          "Fruit",
          "Red Velvet",
          "Birthday",
          "Carrot",
          "Marble",
          "Coffee",
        ];
      validate(order: Order) {
          if (!ItemValidator.possibleItems.includes(order.item)) {
              throw new Error(`Invalid item. Must be one of: ${ItemValidator.possibleItems.join(", ")}`);
          }
      }
  }

  //validate price +ve 
export class PriceValidator implements IValidator {
      validate(order: Order) {
          if (order.price <= 0) {
              throw new Error("Price must be greater than zero");
          }
      }
  }

export class MaxPriceValidator implements IValidator {
  validate(order: Order) {
      if (order.price > 100) {
          throw new Error("Price must be less than 100");
      }
  }
}

interface ICalculator {
  getRevenue(orders: Order[]): number;
  getAverageBuyPower(orders: Order[]): number;
}

export class FinanceCalculator implements ICalculator {
  //calculate total revenue and avg buy power
  public getRevenue(orders: Order[]) {
      return orders.reduce((total, order) => total + order.price, 0);
  };
  public getAverageBuyPower(orders: Order[]) {
      return orders.length === 0 ? 0 : this.getRevenue(orders) / orders.length;
  };
}