import XMLFurnitureMapper from "../src/mappers/Furniture.mapper";

describe("XMLFurnitureMapper", () => {
    let mapper: XMLFurnitureMapper;

    beforeAll(() => {
        mapper = new XMLFurnitureMapper();
    });

    it("should correctly map valid JSON data to a furniture object", () => {
        const data = {
            Type: "Chair",
            Material: "Wood",
            Color: "Brown",
            Size: "Medium",
            Style: "Modern",
            AssemblyRequired: "Yes",
            Warranty: "2 years"
        };

        const result = mapper.map(data);

        expect(result.getType()).toBe("Chair");
        expect(result.getMaterial()).toBe("Wood");
        expect(result.getColor()).toBe("Brown");
        expect(result.getSize()).toBe("Medium");
        expect(result.getStyle()).toBe("Modern");
        expect(result.isAssemblyRequired()).toBe(true);
        expect(result.getWarranty()).toBe("2 years");
    });

    it("should throw an error when required fields are missing", () => {
        const data = {
            Type: "Chair",
            Material: "Wood",
            Color: "Brown",
            Size: "Medium",
            Style: "Modern"
        };

        expect(() => mapper.map(data)).toThrowError();
    });

    it("should throw an error when an empty object is passed", () => {
        const data = {};

        expect(() => mapper.map(data)).toThrowError();
    });
});