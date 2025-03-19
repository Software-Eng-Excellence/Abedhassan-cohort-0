import { CSVClothingMapper } from "../src/mappers/Clothing.mapper";

describe('CSVClothingMapper', () => {
    let mapper: CSVClothingMapper;

    beforeAll(() => {
        mapper = new CSVClothingMapper();
    });

    it('should correctly map valid CSV data to a clothing object', () => {
        const csvData = ["1", "T-Shirt", "M", "Red", "Cotton", "Striped", "Nike", "Unisex", "Box", "None"];
        const result = mapper.map(csvData);

        expect(result.getClothingType()).toBe("T-Shirt");
        expect(result.getSize()).toBe("M");
        expect(result.getColor()).toBe("Red");
        expect(result.getMaterial()).toBe("Cotton");
        expect(result.getPattern()).toBe("Striped");
        expect(result.getBrand()).toBe("Nike");
        expect(result.getGender()).toBe("Unisex");
        expect(result.getPackaging()).toBe("Box");
        expect(result.getSpecialRequest()).toBe("None");
    });

    it('should throw an error when required fields are missing', () => {
        const csvData = ["1", "T-Shirt", "M", "Red", "Cotton", "Striped", "Nike", "Unisex", "Box"];

        expect(() => mapper.map(csvData)).toThrowError();
    });

    it('should throw an error when an empty object is passed', () => {
        const csvData: string[] = [];

        expect(() => mapper.map(csvData)).toThrowError();
    });
});