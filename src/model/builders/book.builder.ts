
import logger from "../../util/logger";
import { Book } from "../book.model";

export class BookBuilder {
    private title!: string;
    private author!: string;
    private genre!: string;
    private format!: string;
    private language!: string;
    private publisher!: string;
    private specialEdition!: string;
    private packaging!: string;

    setTitle(title: string): this {
        this.title = title;
        return this;
    }

    setAuthor(author: string): this {
        this.author = author;
        return this;
    }

    setGenre(genre: string): this {
        this.genre = genre;
        return this;
    }

    setFormat(format: string): this {
        this.format = format;
        return this;
    }

    setLanguage(language: string): this {
        this.language = language;
        return this;
    }

    setPublisher(publisher: string): this {
        this.publisher = publisher;
        return this;
    }

    setSpecialEdition(specialEdition: string): this {
        this.specialEdition = specialEdition;
        return this;
    }

    setPackaging(packaging: string): this {
        this.packaging = packaging;
        return this;
    }

    build(): Book {
        const requiredProperties = {
            title: this.title,
            author: this.author,
            genre: this.genre,
            format: this.format,
            language: this.language,
            publisher: this.publisher,
            specialEdition: this.specialEdition,
            packaging: this.packaging
        };

        for (const property in requiredProperties) {
            if (!requiredProperties[property as keyof typeof requiredProperties]) {
                logger.error("Missing required properties, could not build book");
                throw new Error("Missing required property");
            }
        }

        return new Book(
            this.title,
            this.author,
            this.genre,
            this.format,
            this.language,
            this.publisher,
            this.specialEdition,
            this.packaging
        );
    }
}

export { Book };