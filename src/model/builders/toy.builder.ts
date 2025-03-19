import logger from "../../util/logger";
import { toy } from "../toy.model";

export class ToyBuilder {
    private type!: string;
    private ageGroup!: string;
    private brand!: string;
    private material!: string;
    private batteryRequired!: boolean;
    private educational!: boolean;

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
        const requiredProperties = {
            type: this.type,
            ageGroup: this.ageGroup,
            brand: this.brand,
            material: this.material,
            batteryRequired: this.batteryRequired,
            educational: this.educational
        };

        for (const property in requiredProperties) {
            if (!requiredProperties[property as keyof typeof requiredProperties]) {
                logger.error("Missing required properties, could not build toy");
                throw new Error("Missing required properties");
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