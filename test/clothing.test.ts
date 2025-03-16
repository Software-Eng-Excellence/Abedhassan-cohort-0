import { ClothingBuilder } from "../src/model/builders/clothing.builder";
import { clothing } from "../src/model/clothing.model";

describe("ClothingBuilder", () => {
    test("should build a Clothing object with all properties", () => {
        const clothing = new ClothingBuilder()
            .setClothingType("T-Shirt")
            .setSize("M")
            .setColor("Blue")
            .setMaterial("Cotton")
            .setPattern("Striped")
            .setBrand("Nike")
            .setGender("Unisex")
            .setPackaging("Box")
            .setSpecialRequest("Gift Wrapped")
            .build();

        expect(clothing).toBeInstanceOf(clothing.constructor);
        expect(clothing.getSize()).toBe("M");
        expect(clothing.getColor()).toBe("Blue");
    });

    test("should correctly set and retrieve properties", () => {
        const builder = new ClothingBuilder();
        builder.setBrand("Adidas");
        expect(builder["brand"]).toBe("Adidas");

        builder.setSize("S");
        expect(builder["size"]).toBe("S");
    });

    test("should handle invalid input values", () => {
        const builder = new ClothingBuilder();
        builder.setSize("");
        expect(() => builder.build()).toThrow("Missing required properties");
    });
});