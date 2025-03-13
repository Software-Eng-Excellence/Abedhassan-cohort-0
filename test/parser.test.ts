import { parseCSV } from '../src/util/parser';
import fs from 'fs';
import path from 'path';

jest.mock('fs');

describe('parseCSV', () => {
    const mockFilePath = path.join(__dirname, 'mock.csv');

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should parse a CSV file correctly', async () => {
        const mockData = 'name,age\nJohn,30\nJane,25';
        fs.createReadStream = jest.fn().mockReturnValue({
            on: (event: string, callback: Function) => {
                if (event === 'data') {
                    callback(mockData);
                }
                if (event === 'end') {
                    callback();
                }
                return this;
            },
        });

        const result = await parseCSV(mockFilePath);
        expect(result).toEqual([
            ['name', 'age'],
            ['John', '30'],
            ['Jane', '25'],
        ]);
    });

    it('should handle empty lines in the CSV file', async () => {
        const mockData = 'name,age\n\nJohn,30\n\nJane,25\n';
        fs.createReadStream = jest.fn().mockReturnValue({
            on: (event: string, callback: Function) => {
                if (event === 'data') {
                    callback(mockData);
                }
                if (event === 'end') {
                    callback();
                }
                return this;
            },
        });

        const result = await parseCSV(mockFilePath);
        expect(result).toEqual([
            ['name', 'age'],
            [],
            ['John', '30'],
            [],
            ['Jane', '25'],
            [],
        ]);
    });

    it('should handle errors while reading the CSV file', async () => {
        const mockError = new Error('File read error');
        fs.createReadStream = jest.fn().mockReturnValue({
            on: (event: string, callback: Function) => {
                if (event === 'error') {
                    callback(mockError);
                }
                return this;
            },
        });

        await expect(parseCSV(mockFilePath)).rejects.toThrow('Error reading CSV file');
    });
});