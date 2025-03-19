import path from 'path';
import {parseCSV} from './util/parser'
import {parsexml} from './util/xmlparser'
import {parsejson} from './util/jsonparser'

import logger from './util/logger';
import { config } from 'dotenv';

config();
const { cakeOrdersPath, petOrdersPath, toyOrdersPath } = process.env;

if (!cakeOrdersPath || !petOrdersPath || !toyOrdersPath) {
    throw new Error('One or more environment variables are missing');
}

async function processCSV() {
    try {
        const products = await parseCSV(cakeOrdersPath as string);
        for (const product of products) {
            logger.info(product + '\n');
        }
    } catch (error) {
        logger.error(error);
    }
}

async function processJSON() {
    try {
        const products = await parsejson(petOrdersPath as string);
        for (const product of products) {
            logger.info(product + '\n');
        }
    } catch (error) {
        logger.error(error);
    }
}

async function processXML() {
    try {
        const products = await parsexml(toyOrdersPath as string);
        for (const product of products) {
            logger.info(product + '\n');
        }
    } catch (error) {
        logger.error(error);
    }
}


processCSV();
processJSON();
processXML()