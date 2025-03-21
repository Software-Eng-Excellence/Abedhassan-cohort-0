import { FurnitureBuilder } from "../src/model/builders/furniture.builder";
import { furniture } from "../src/model/furniture.model";

describe("FurnitureBuilder", () => {
    test("should build a Furniture object with all properties", () => {
        const furniture = new FurnitureBuilder()
            .setType("Sofa")
            .setMaterial("Leather")
            .setColor("Black")
            .setSize("Large")
            .setStyle("Modern")
            .setAssemblyRequired(true)
            .setWarranty("5 years")
            .build();

        expect(furniture).toBeInstanceOf(furniture.constructor);
        expect(furniture.getType()).toBe("Sofa");
        expect(furniture.getMaterial()).toBe("Leather");
        expect(furniture.getColor()).toBe("Black");
        expect(furniture.getSize()).toBe("Large");
        expect(furniture.getStyle()).toBe("Modern");
        expect(furniture.isAssemblyRequired()).toBe(true);
        expect(furniture.getWarranty()).toBe("5 years");
    });

    test("should throw an error if required properties are missing", () => {
        expect(() => {
            new FurnitureBuilder().build();
        }).toThrow("Missing required properties");
    });

    test("should correctly set and retrieve properties", () => {
        const builder = new FurnitureBuilder();
        builder.setColor("Blue");
        expect(builder["color"]).toBe("Blue");

        builder.setWarranty("10 years");
        expect(builder["warranty"]).toBe("10 years");
    });

    test("should handle invalid input values", () => {
        const builder = new FurnitureBuilder();
        builder.setType("");
        expect(() => builder.build()).toThrow("Missing required properties");
    });
});