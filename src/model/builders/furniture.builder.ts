import logger from "../../util/logger";
import { furniture } from "../furniture.model";

export class FurnitureBuilder {
    private type!: string;
    private material!: string;
    private color!: string;
    private size!: string;
    private style!: string;
    private assemblyRequired!: boolean;
    private warranty!: string;
    public static newBuilder(): FurnitureBuilder {
        return new FurnitureBuilder();
    }
    setType(type: string): this {
        this.type = type;
        return this;
    }

    setMaterial(material: string): this {
        this.material = material;
        return this;
    }

    setColor(color: string): this {
        this.color = color;
        return this;
    }

    setSize(size: string): this {
        this.size = size;
        return this;
    }

    setStyle(style: string): this {
        this.style = style;
        return this;
    }

    setAssemblyRequired(assemblyRequired: boolean): this {
        this.assemblyRequired = assemblyRequired;
        return this;
    }

    setWarranty(warranty: string): this {
        this.warranty = warranty;
        return this;
    }

    build(): furniture {
        const requiredProperties = {
            type: this.type,
            material: this.material,
            color: this.color,
            size: this.size,
            style: this.style,
            assemblyRequired: this.assemblyRequired,
            warranty: this.warranty
        };

        for (const property in requiredProperties) {
            if (!requiredProperties[property as keyof typeof requiredProperties]) {
                logger.error("Missing required properties, could not build furniture");
                throw new Error("Missing required property");
                
            }
        }

        return new furniture(
            this.type,
            this.material,
            this.color,
            this.size,
            this.style,
            this.assemblyRequired,
            this.warranty
        );
    }
}

export { furniture };