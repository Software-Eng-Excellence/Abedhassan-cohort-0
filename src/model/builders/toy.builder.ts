import logger from "../../util/logger";
import { toy } from "../toy.model";

export class ToyBuilder {
    private type!: string;
    private ageGroup!: string;
    private brand!: string;
    private material!: string;
    private batteryRequired!: boolean;
    private educational!: boolean;
    public static newBuilder(): ToyBuilder {
        return new ToyBuilder();
    }   

    setType(type: string): this {
        this.type = type;
        return this;
    }

    setAgeGroup(ageGroup: string): this {
        this.ageGroup = ageGroup;
        return this;
    }

    setBrand(brand: string): this {
        this.brand = brand;
        return this;
    }

    setMaterial(material: string): this {
        this.material = material;
        return this;
    }

    setBatteryRequired(batteryRequired: boolean): this {
        this.batteryRequired = batteryRequired;
        return this;
    }

    setEducational(educational: boolean): this {
        this.educational = educational;
        return this;
    }

    build(): toy {
        const requiredProperties = [
            this.type,
            this.ageGroup,
            this.brand,
            this.material,
            this.batteryRequired,
            this.educational
        ];

        for (const property of requiredProperties) {
            if (!property) {
            if (property === undefined || property === null) {
                throw new Error('Missing required property');
            }
        }
    }

        return new toy(
            this.type,
            this.ageGroup,
            this.brand,
            this.material,
            this.batteryRequired,
            this.educational
        );
    }
}

export { toy };