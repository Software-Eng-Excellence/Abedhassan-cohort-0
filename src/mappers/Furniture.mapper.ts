import { furniture } from "model/furniture.model";
import { IMapper } from "./IMappers";
import { FurnitureBuilder } from "../model/builders/furniture.builder";

export class XMLFurnitureMapper implements IMapper<Record<string, string>, furniture> {
    map(data: Record<string, string>): furniture {
        return FurnitureBuilder.newBuilder()
            .setType(data["Type"])
            .setMaterial(data["Material"])
            .setColor(data["Color"])
            .setSize(data["Size"])
            .setStyle(data["Style"])
            .setAssemblyRequired(data["AssemblyRequired"] === "Yes")
            .setWarranty(data["Warranty"])
            .build();
    }
}
export default XMLFurnitureMapper;