import { PetBuilder } from "../src/model/builders/pet.builder";
import { pet } from "../src/model/pet.model";

describe("PetBuilder", () => {
    test("should build a Pet object with all properties", () => {
        const pet = new PetBuilder()
            .setProductType("Food")
            .setPetType("Dog")
            .setBrand("Purina")
            .setSize("Medium")
            .setFlavor("Chicken")
            .setEcoFriendly("Yes")
            .build();

        expect(pet).toBeInstanceOf(pet.constructor);
        expect(pet.getProductType()).toBe("Food");
        expect(pet.getPetType()).toBe("Dog");
        expect(pet.getBrand()).toBe("Purina");
        expect(pet.getSize()).toBe("Medium");
        expect(pet.getFlavor()).toBe("Chicken");
        expect(pet.getEcoFriendly()).toBe("Yes");
    });

    test("should throw an error if required properties are missing", () => {
        expect(() => {
            new PetBuilder().build();
        }).toThrow("Missing required properties");
    });

    test("should correctly set and retrieve properties", () => {
        const builder = new PetBuilder();
        builder.setFlavor("Beef");
        expect(builder["flavor"]).toBe("Beef");

        builder.setEcoFriendly("No");
        expect(builder["ecoFriendly"]).toBe("No");
    });

    test("should handle invalid input values", () => {
        const builder = new PetBuilder();
        builder.setProductType("");
        expect(() => builder.build()).toThrow("Missing required properties");
    });
});