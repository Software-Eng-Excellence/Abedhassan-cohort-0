
import logger from './util/logger';
import { CSVCakeMapper } from './mappers/Cake.mapper';
import {parseCSV} from './util/parser';
import { CSVOrderMapper } from './mappers/Order.mapper';
import config from './config';
import { CSVClothingMapper } from "./mappers/Clothing.mapper";
import { JSONBookMapper } from "./mappers/Book.mapper";
import { JSONPetMapper } from "./mappers/Pet.mapper";
import { XMLToyMapper } from "./mappers/toy.mapper";
import { XMLFurnitureMapper } from "./mappers/Furniture.mapper";
import { parsejson } from './util/jsonparser';
import { parsexml } from './util/xmlparser';
const {  cakeOrdersPath, bookOrdersPath, petOrdersPath, furnitureOrdersPath, toyOrdersPath, clothingOrdersPath } = config;


async function main() {
    const cakeData = await parseCSV(cakeOrdersPath)
    const cakeMapper = new CSVCakeMapper();
    const cakeOrderMapper = new CSVOrderMapper(cakeMapper);
    const cakeOrders = cakeData.map(cakeOrderMapper.map.bind(cakeOrderMapper));
    logger.info("List of cake orders \n %o", cakeOrders);
   
   const clothingData = await parseCSV(clothingOrdersPath)
        const clothingMapper = new CSVClothingMapper();
        const clothingOrderMapper = new CSVOrderMapper(clothingMapper);
        const clothingOrders = clothingData.map(clothingOrderMapper.map.bind(clothingOrderMapper));
        logger.info("List of clothing orders \n %o", clothingOrders);

        const bookData= await parsejson(bookOrdersPath);

        const bookMapper = new JSONBookMapper();
        const bookOrders = bookData.map(bookMapper.map.bind(bookMapper));

        logger.info("List of book orders \n %o", bookOrders);
       const petData = await parsejson(petOrdersPath);
        const petMapper = new JSONPetMapper();
        const petOrders = petData.map(petMapper.map.bind(petMapper));
        logger.info("List of pet orders \n %o", petOrders);

       const toyData: { [key: string]: string; }[] = await parsexml(toyOrdersPath);
        const toyMapper = new XMLToyMapper();
        const toyOrders = toyData.map(toyMapper.map.bind(toyMapper));
        logger.info("List of toy orders \n %o", toyOrders);

        const furnitureData: { [key: string]: string; }[] = await parsexml(furnitureOrdersPath);
        const furnitureMapper = new XMLFurnitureMapper();
        const furnitureOrders = furnitureData.map(furnitureMapper.map.bind(furnitureMapper));
        logger.info("List of furniture orders \n %o", furnitureOrders);
    


}
main()
