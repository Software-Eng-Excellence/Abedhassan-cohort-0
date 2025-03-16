import logger from "../../util/logger";
import { Cake } from "../Cake.model";
type CakeType = 'Birthday' | 'Wedding' | 'Anniversary' | 'Baby Shower' | 'Graduation' | 'Other';

export class cakeBuilder{
    private type!: CakeType;
    private flavor!: string;
    private filling!: string;
    private size!: number;
    private layers!: number;
    private frostingType!: string;
    private frostingFlavor!: string;
    private decorationType!: string;
    private decorationColor!: string;
    private customMessage!: string;
    private shape!: string;
    private allergies!: string;
    private specialIngredients!: string;
    private packagingType!: string;
    setType(type: CakeType): this {
        this.type = type;
        return this;
    }

    setFlavor(flavor: string): this {
        this.flavor = flavor;
        return this;
    }

    setFilling(filling: string): this {
        this.filling = filling;
        return this;
    }

    setSize(size: number): this {
        this.size = size;
        return this;
    }

    setLayers(layers: number): this {
        this.layers = layers;
        return this;
    }

    setFrostingType(frostingType: string): this {
        this.frostingType = frostingType;
        return this;
    }

    setFrostingFlavor(frostingFlavor: string): this {
        this.frostingFlavor = frostingFlavor;
        return this;
    }

    setDecorationType(decorationType: string): this {
        this.decorationType = decorationType;
        return this;
    }

    setDecorationColor(decorationColor: string): this {
        this.decorationColor = decorationColor;
        return this;
    }

    setCustomMessage(customMessage: string): this {
        this.customMessage = customMessage;
        return this;
    }

    setShape(shape: string): this {
        this.shape = shape;
        return this;
    }

    setAllergies(allergies: string): this {
        this.allergies = allergies;
        return this;
    }

    setSpecialIngredients(specialIngredients: string): this {
        this.specialIngredients = specialIngredients;
        return this;
    }

    setPackagingType(packagingType: string): this {
        this.packagingType = packagingType;
        return this;
    }
    build(): Cake {
        const requiredProperties = {
            type: this.type,
            flavor: this.flavor,
            filling: this.filling,
            size: this.size,
            layers: this.layers,
            frostingType: this.frostingType,
            frostingFlavor: this.frostingFlavor,
            decorationType: this.decorationType,
            decorationColor: this.decorationColor,
            customMessage: this.customMessage,
            shape: this.shape,
            allergies: this.allergies,
            specialIngredients: this.specialIngredients,
            packagingType: this.packagingType
        };
        for (const property in requiredProperties) {
            if (!requiredProperties[property as keyof typeof requiredProperties]) {
                logger.error("Missing required properties,could not build cake");
                throw new Error("Missing required property");
            }
        }
        
        return new Cake(
            this.type,
            this.flavor,
            this.filling,
            this.size,
            this.layers,
            this.frostingType,
            this.frostingFlavor,
            this.decorationType,
            this.decorationColor,
            this.customMessage,
            this.shape,
            this.allergies,
            this.specialIngredients,
            this.packagingType
        );
    }
}

export { Cake };
