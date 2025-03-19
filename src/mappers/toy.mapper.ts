import { toy } from "model/toy.model";
import { IMapper } from "./IMappers";
import { ToyBuilder } from "../model/builders/toy.builder";

export class XMLToyMapper implements IMapper<{ [key: string]: string }, toy> {
    map(data: { [key: string]: string }): toy {
        return ToyBuilder.newBuilder()
            .setType(data["Type"])
            .setAgeGroup(data["AgeGroup"])
            .setBrand(data["Brand"])
            .setMaterial(data["Material"])
            .setBatteryRequired(data["BatteryRequired"] === 'true')
            .setEducational(data["Educational"] === 'true')
            .build();
    }
}

export default XMLToyMapper;
   