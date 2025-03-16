import { IItem, ItemCategory } from "./Item.model";
export class pet implements IItem {
    private productType: string;
    private petType: string;
    private brand: string;
    private size: string;
    private flavor: string;
    private ecoFriendly: string;

    constructor(productType: string, petType: string, brand: string, size: string, flavor: string, ecoFriendly: string) {
        this.productType = productType;
        this.petType = petType;
        this.brand = brand;
        this.size = size;
        this.flavor = flavor;
        this.ecoFriendly = ecoFriendly;
    }

    getProductType(): string {
        return this.productType;
    }

    getPetType(): string {
        return this.petType;
    }

    getBrand(): string {
        return this.brand;
    }

    getSize(): string {
        return this.size;
    }

    getFlavor(): string {
        return this.flavor;
    }

    getEcoFriendly(): string {
        return this.ecoFriendly;
    }

   getCategory(): ItemCategory {
        return ItemCategory.CAKE;
    }


}