import { OrderBuilder } from "../model/builders/order.builder";
import { IMapper } from "./IMappers";
import { IOrder } from "../model/IOrder";
import { IItem } from "../model/IItem";

export class CSVOrderMapper implements IMapper<string[], IOrder> {
    constructor(private itemMapper: IMapper<string[], IItem>) {
    }
    map(data: string[]): IOrder {
        const item:IItem= this.itemMapper.map(data);
        return OrderBuilder.newBuilder()
            .setPrice(parseFloat(data[data.length - 2]))
            .setQuantity(parseInt(data[data.length - 1]))
            .setId(data[0])
            .setItem(item)
            .build();
        
    }
}