import { parsexml } from '../src/util/xmlparser';
import fs from 'fs';
import path from 'path';

jest.mock('fs');

describe('parsexml', () => {
    const mockFilePath = path.join(__dirname, 'mockfile.csv');

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should parse CSV file correctly', async () => {
        const mockData = 'name,age\nJohn,30\nJane,25';
        fs.createReadStream = jest.fn().mockReturnValue({
            on: (event: string, callback: Function) => {
                if (event === 'data') callback(mockData);
                if (event === 'end') callback();
                return this;
            },
        });

        const result = await parsexml(mockFilePath);
        expect(result).toEqual([
            ['name', 'age'],
            ['John', '30'],
            ['Jane', '25'],
        ]);
    });

    it('should handle empty CSV file', async () => {
        const mockData = '';
        fs.createReadStream = jest.fn().mockReturnValue({
            on: (event: string, callback: Function) => {
                if (event === 'data') callback(mockData);
                if (event === 'end') callback();
                return this;
            },
        });

        const result = await parsexml(mockFilePath);
        expect(result).toEqual([]);
    });

    it('should handle CSV file with only headers', async () => {
        const mockData = 'name,age\n';
        fs.createReadStream = jest.fn().mockReturnValue({
            on: (event: string, callback: Function) => {
                if (event === 'data') callback(mockData);
                if (event === 'end') callback();
                return this;
            },
        });

        const result = await parsexml(mockFilePath);
        expect(result).toEqual([['name', 'age']]);
    });

    it('should handle error during file reading', async () => {
        const mockError = new Error('File read error');
        fs.createReadStream = jest.fn().mockReturnValue({
            on: (event: string, callback: Function) => {
                if (event === 'error') callback(mockError);
                return this;
            },
        });

        await expect(parsexml(mockFilePath)).rejects.toThrow('File read error');
    });
});