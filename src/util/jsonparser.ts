import fs from 'fs'; 
import logger from './logger';

export const parsejson = (filePath: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    let jsonData = '';

    const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' }); // Create a readable stream for the file

    readStream.on('data', (chunk: string | Buffer) => {
      jsonData += chunk.toString('utf-8'); // Accumulate JSON data
    });

    readStream.on('end', () => {
      try {
        const parsedData = JSON.parse(jsonData); // Parse JSON data
        resolve(parsedData); // Resolve the promise with parsed data
      } catch (error) {
        logger.error("Error while parsing JSON from file %s, $o", filePath, error);
        reject(error); // Reject the promise if JSON parsing fails
      }
    });

    readStream.on('error', (error) => {
      logger.error("Error while reading the stream of file %s, $o", filePath, error);
      reject(error); // Reject the promise if an error occurs
    });
  });
};