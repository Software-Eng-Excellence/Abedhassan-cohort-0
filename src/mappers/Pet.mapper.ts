import { pet } from "model/pet.model";
import { IMapper } from "./IMappers";
import { PetBuilder } from "../model/builders/pet.builder";

export class JSONPetMapper implements IMapper<{ [key: string]: string }, pet> {
    map(data: { [key: string]: string }): pet {
        return PetBuilder.newBuilder()
        .setProductType(data["Product Type"])
        .setPetType(data["Pet Type"])
        .setBrand(data["Brand"])
        .setSize(data["Size"])
        .setFlavor(data["Flavor"])
        .setEcoFriendly(data["Eco-Friendly"])
        .build()
    }
}
export default JSONPetMapper;