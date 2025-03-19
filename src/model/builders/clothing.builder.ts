import logger from "../../util/logger";
import { clothing } from "../clothing.model";

export class ClothingBuilder {
    private clothingType!: string;
    private size!: string;
    private color!: string;
    private material!: string;
    private pattern!: string;
    private brand!: string;
    private gender!: string;
    private packaging!: string;
    private specialRequest!: string;

    public static newBuilder(): ClothingBuilder {
        return new ClothingBuilder();
    }

    setClothingType(clothingType: string): this {
        this.clothingType = clothingType;
        return this;
    }

    setSize(size: string): this {
        this.size = size;
        return this;
    }

    setColor(color: string): this {
        this.color = color;
        return this;
    }

    setMaterial(material: string): this {
        this.material = material;
        return this;
    }

    setPattern(pattern: string): this {
        this.pattern = pattern;
        return this;
    }

    setBrand(brand: string): this {
        this.brand = brand;
        return this;
    }

    setGender(gender: string): this {
        this.gender = gender;
        return this;
    }

    setPackaging(packaging: string): this {
        this.packaging = packaging;
        return this;
    }

    setSpecialRequest(specialRequest: string): this {
        this.specialRequest = specialRequest;
        return this;
    }

    build(): clothing {
        const requiredProperties = {
            clothingType: this.clothingType,
            size: this.size,
            color: this.color,
            material: this.material,
            pattern: this.pattern,
            brand: this.brand,
            gender: this.gender,
            packaging: this.packaging,
            specialRequest: this.specialRequest
        };

        for (const property in requiredProperties) {
            if (!requiredProperties[property as keyof typeof requiredProperties]) {
                logger.error("Missing required properties, could not build clothing");
                throw new Error("Missing required property");
                
            }
        }

        return new clothing(
            this.clothingType,
            this.size,
            this.color,
            this.material,
            this.pattern,
            this.brand,
            this.gender,
            this.packaging,
            this.specialRequest
        );
    }
}

export { clothing };