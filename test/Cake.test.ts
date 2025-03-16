import { cakeBuilder } from "../src/model/builders/Cake.builder";
import { Cake } from "../src/model/Cake.model";

describe("CakeBuilder", () => {
    test("should build a Cake with all properties", () => {
        const cake = new cakeBuilder()
            .setType("Birthday")
            .setFlavor("Vanilla")
            .setFilling("Chocolate")
            .setSize(10)
            .setLayers(3)
            .setFrostingType("Buttercream")
            .setFrostingFlavor("Chocolate")
            .setDecorationType("Sprinkles")
            .setDecorationColor("Red")
            .setCustomMessage("Happy Birthday!")
            .setShape("Round")
            .setAllergies("Nuts")
            .setSpecialIngredients("Organic Flour")
            .setPackagingType("Box")
            .build();

        expect(cake).toBeInstanceOf(Cake);
        expect(cake.getSize()).toBe(10);
        expect(cake.getFlavor()).toBe("Vanilla");
    });

    test("should throw an error if required properties are missing", () => {
        expect(() => {
            new cakeBuilder().setType("Birthday").build();
        }).toThrow("Missing required property");
    });


    test("should correctly set and retrieve properties", () => {
        const builder = new cakeBuilder();
        builder.setType("Birthday");
        expect(builder["type"]).toBe("Birthday");

        builder.setSize(8);
        expect(builder["size"]).toBe(8);
    });

    test("should handle invalid input values", () => {
        const builder = new cakeBuilder();
        builder.setSize(-5);
        expect(()=>builder.build()).toThrow("Missing required property");

    });
});