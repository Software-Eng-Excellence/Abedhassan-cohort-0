import path from 'path';
import {cakeBuilder} from './model/builders/Cake.builder'
import {BookBuilder} from './model/builders/book.builder'
import {ClothingBuilder} from './model/builders/clothing.builder'
import {FurnitureBuilder} from './model/builders/furniture.builder'
import {PetBuilder} from './model/builders/pet.builder'
import {ToyBuilder} from './model/builders/toy.builder'
import logger from 'util/logger';

type CakeType = 'Birthday' | 'Wedding' | 'Anniversary' | 'Baby Shower' | 'Graduation' | 'Other';
async function main() {
    try {
        const CakeBuilder = new cakeBuilder();
        const cake = CakeBuilder.setType("Birthday")
            .setFlavor("Vanilla")
            .setFilling("Cream")
            .setSize(20)
            .setLayers(2)
            .setFrostingType("Buttercream")
            .setFrostingFlavor("Vanilla")
            .setDecorationType("Sprinkles")
            .setDecorationColor("Multi-color")
            .setCustomMessage("Happy Birthday")
            .setShape("Round")
            .setAllergies("Nut-Free")
            .setSpecialIngredients("Organic Ingredients")
            .setPackagingType("Standard Box")
            .build();
        console.log(cake);

        const bookBuilder = new BookBuilder();
        bookBuilder.setTitle("The Great Gatsby")
            .setAuthor("F. Scott Fitzgerald")
            .setGenre("Fiction")
            .setFormat("Hardcover")
            .setLanguage("English")
            .setPublisher("Scribner")
            .setSpecialEdition("First Edition")
            .setPackaging("Slipcase");

        const book = bookBuilder.build();
        console.log(book);

        const clothingBuilder = new ClothingBuilder();
        clothingBuilder.setClothingType("T-Shirt")
            .setSize("M")
            .setColor("Blue")
            .setMaterial("Cotton")
            .setPattern("Solid")
            .setBrand("BrandName")
            .setGender("Unisex")
            .setPackaging("Plastic Bag")
            .setSpecialRequest("None");

        const clothing = clothingBuilder.build();
        console.log(clothing);

        const furnitureBuilder = new FurnitureBuilder();
        furnitureBuilder.setType("Chair")
            .setMaterial("Wood")
            .setColor("Brown")
            .setSize("Medium")
            .setStyle("Modern")
            .setAssemblyRequired(true)
            .setWarranty("2 years");

        const furniture = furnitureBuilder.build();
        console.log(furniture);

        const petBuilder = new PetBuilder();
        petBuilder.setProductType("Food")
            .setPetType("Dog")
            .setBrand("BrandName")
            .setSize("Large")
            .setFlavor("Chicken")
            .setEcoFriendly("Yes");

        const pet = petBuilder.build();
        console.log(pet);

        const toyBuilder = new ToyBuilder();
        toyBuilder.setType("Action Figure")
            .setAgeGroup("5+")
            .setBrand("ToyBrand")
            .setMaterial("Plastic")
            .setBatteryRequired(true)
            .setEducational(true);

        const toy = toyBuilder.build();
        console.log(toy);
    } catch (error) {
        logger.error(error);
}
}