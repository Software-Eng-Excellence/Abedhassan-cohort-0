import { IItem } from "../IItem";
import { Order } from "../Order.model";
export class OrderBuilder{
    private item!: IItem;
    private price!: number;
    private quantity!: number;
    private id!: string;
    public static newBuilder(): OrderBuilder {
        return new OrderBuilder();
    }
    setItem(item: IItem): this {
        this.item = item;
        return this;
    }
    setPrice(price: number): this {
        this.price = price;
        return this;
    }
    setQuantity(quantity: number): this {
        this.quantity = quantity;
        return this;
    }
    setId(id: string): this {
        this.id = id;
        return this;
    }
    validate(): void {
        if (!this.item) {
            throw new Error("Item is required");
        }
        if (this.price === undefined) {
            throw new Error("Price is required");
        }
        if (this.quantity === undefined) {
            throw new Error("Quantity is required");
        }
        if (!this.id) {
            throw new Error("ID is required");
        }
    }
    build(): Order {
        return new Order(this.item, this.price, this.quantity, this.id);
    }
}


