import fs from 'fs';
import { parseStringPromise } from 'xml2js';
import logger from './logger';

export function parsexml(filePath: string): Promise<Record<string, string>[]> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', async (err, data) => {
      if (err) {
        logger.error("Error while reading XML file %s, %o", filePath, err);
        return reject(err);
      }

      try {
        // Parse XML content into a JavaScript object
        const result: { orders: { order: Array<Record<string, string[]>> } } = await parseStringPromise(data);

        // Convert XML object to an array of key-value pairs
        const formattedData: { [key: string]: string }[] = [];
        if (result.orders && result.orders.order) {
          result.orders.order.forEach((order: any) => {
            const orderObject: { [key: string]: string } = {};
            Object.keys(order).forEach((key) => {
              orderObject[key] = Array.isArray(order[key]) ? order[key][0] : order[key]; // Extract values from XML structure
            });
            formattedData.push(orderObject);
          });
        }

        resolve(formattedData);
      } catch (parseError) {
        logger.error("Error while parsing XML file %s, %o", filePath, parseError);
        reject(parseError);
      }
    });
  });
};
