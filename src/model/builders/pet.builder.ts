import logger from "../../util/logger";
import { pet } from "../pet.model";

export class PetBuilder {
    private productType!: string;
    private petType!: string;
    private brand!: string;
    private size!: string;
    private flavor!: string;
    private ecoFriendly!: string;
    public static newBuilder(): PetBuilder {
        return new PetBuilder();
    }   

    setProductType(productType: string): this {
        this.productType = productType;
        return this;
    }

    setPetType(petType: string): this {
        this.petType = petType;
        return this;
    }

    setBrand(brand: string): this {
        this.brand = brand;
        return this;
    }

    setSize(size: string): this {
        this.size = size;
        return this;
    }

    setFlavor(flavor: string): this {
        this.flavor = flavor;
        return this;
    }

    setEcoFriendly(ecoFriendly: string): this {
        this.ecoFriendly = ecoFriendly;
        return this;
    }

    build(): pet {
        const requiredProperties = {
            productType: this.productType,
            petType: this.petType,
            brand: this.brand,
            size: this.size,
            flavor: this.flavor,
            ecoFriendly: this.ecoFriendly
        };

        for (const property in requiredProperties) {
            if (!requiredProperties[property as keyof typeof requiredProperties]) {
                logger.error("Missing required properties, could not build pet");
                throw new Error("Missing required property");
                
            }
        }

        return new pet(
            this.productType,
            this.petType,
            this.brand,
            this.size,
            this.flavor,
            this.ecoFriendly
        );
    }
}

export { pet };