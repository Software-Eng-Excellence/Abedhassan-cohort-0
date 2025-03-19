import { JSONBookMapper } from "../src/mappers/Book.mapper";
import { Book } from "../src/model/book.model";

describe('JSONBookMapper', () => {
    let mapper: JSONBookMapper;

    beforeAll(() => {
        mapper = new JSONBookMapper();
    });

    it('should correctly map valid JSON data to a Book object', () => {
        const jsonData = {
            "Book Title": "Test Title",
            "Author": "Test Author",
            "Genre": "Test Genre",
            "Format": "Test Format",
            "Language": "Test Language",
            "Publisher": "Test Publisher",
            "Special Edition": "Test Special Edition",
            "Packaging": "Test Packaging"
        };

        const book = mapper.map(jsonData);

        expect(book).toBeInstanceOf(Book);
        expect(book.getTitle()).toBe("Test Title");
        expect(book.getAuthor()).toBe("Test Author");
        expect(book.getGenre()).toBe("Test Genre");
        expect(book.getFormat()).toBe("Test Format");
        expect(book.getLanguage()).toBe("Test Language");
        expect(book.getPublisher()).toBe("Test Publisher");
        expect(book.getSpecialEdition()).toBe("Test Special Edition");
        expect(book.getPackaging()).toBe("Test Packaging");
    });

    it('should throw an error when required fields are missing', () => {
        const jsonData = {
            "Book Title": "Test Title",
            "Author": "Test Author"
            // Missing other required fields
        };

        expect(() => mapper.map(jsonData)).toThrow();
    });

    it('should throw an error when an empty object is passed', () => {
        const jsonData = {};

        expect(() => mapper.map(jsonData)).toThrow();
    });
});