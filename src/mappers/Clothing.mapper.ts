import { clothing } from "model/clothing.model";
import { IMapper } from "./IMappers";
import { ClothingBuilder } from "../model/builders/clothing.builder";

export class CSVClothingMapper implements IMapper<string[], clothing> {
    map(data: string[]): clothing {
        return ClothingBuilder.newBuilder()
            .setClothingType(data[1])
            .setSize(data[2])
            .setColor(data[3])
            .setMaterial(data[4])
            .setPattern(data[5])
            .setBrand(data[6])
            .setGender(data[7])
            .setPackaging(data[8])
            .setSpecialRequest(data[9])
            .build();
    }
}

export default CSVClothingMapper;
