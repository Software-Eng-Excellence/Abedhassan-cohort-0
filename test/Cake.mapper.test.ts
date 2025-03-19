import { CSVCakeMapper } from "../src/mappers/Cake.mapper";
import { Cake } from "../src/model/Cake.model";

describe('CSVCakeMapper', () => {
    let mapper: CSVCakeMapper;

    beforeAll(() => {
        mapper = new CSVCakeMapper();
    });

    it('should correctly map valid CSV data to a Cake object', () => {
        const data = [
            "0", "Birthday", "Chocolate", "Vanilla", "8", "2", "Buttercream", "Chocolate", "Sprinkles", "Red", "Happy Birthday", "Round", "Nuts", "Organic", "Box"
        ];
        const cake = mapper.map(data);

        expect(cake).toBeInstanceOf(Cake);
        expect(cake.getType()).toBe("Birthday");
        expect(cake.getFlavor()).toBe("Chocolate");
        expect(cake.getFilling()).toBe("Vanilla");
        expect(cake.getSize()).toBe(8);
        expect(cake.getLayers()).toBe(2);
        expect(cake.getFrostingType()).toBe("Buttercream");
        expect(cake.getFrostingFlavor()).toBe("Chocolate");
        expect(cake.getDecorationType()).toBe("Sprinkles");
        expect(cake.getDecorationColor()).toBe("Red");
        expect(cake.getCustomMessage()).toBe("Happy Birthday");
        expect(cake.getShape()).toBe("Round");
        expect(cake.getAllergies()).toBe("Nuts");
        expect(cake.getSpecialIngredients()).toBe("Organic");
        expect(cake.getPackagingType()).toBe("Box");
    });

    it('should throw an error when required fields are missing', () => {
        const data = [
            "0", "Birthday", "Chocolate", "Vanilla", "8", "2", "Buttercream", "Chocolate", "Sprinkles", "Red", "Happy Birthday", "Round", "Nuts", "Organic"
        ];

        expect(() => mapper.map(data)).toThrow();
    });

    it('should throw an error when an empty array is passed', () => {
        const data: string[] = [];

        expect(() => mapper.map(data)).toThrow();
    });
});