
import fs from 'fs';
import { Readable } from 'stream';
import { parsejson } from '../src/util/jsonparser';
import logger from '../src/util/logger';
jest.mock('fs');
jest.mock('../src/util/logger');
describe('parsejson', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should parse JSON file correctly', async () => {
        const mockData = JSON.stringify({ key: 'value' });
        const mockReadStream = new Readable();
        mockReadStream._read = () => {}; // No-op
        (fs.createReadStream as jest.Mock).mockReturnValue(mockReadStream);

        process.nextTick(() => {
            mockReadStream.emit('data', mockData);
            mockReadStream.emit('end');
        });

        const result = await parsejson('path/to/file.json');
        expect(result).toEqual({ key: 'value' });
    });

    it('should handle JSON parsing errors', async () => {
        const mockData = 'invalid JSON';
        const mockReadStream = new Readable();
        mockReadStream._read = () => {}; // No-op
        (fs.createReadStream as jest.Mock).mockReturnValue(mockReadStream);

        process.nextTick(() => {
            mockReadStream.emit('data', mockData);
            mockReadStream.emit('end');
        });

        await expect(parsejson('path/to/file.json')).rejects.toThrow();
        expect(logger.error).toHaveBeenCalled();
    });

    it('should handle file read errors', async () => {
        const mockReadStream = new Readable();
        mockReadStream._read = () => {}; // No-op
        (fs.createReadStream as jest.Mock).mockReturnValue(mockReadStream);

        process.nextTick(() => {
            mockReadStream.emit('error', new Error('File read error'));
        });

        await expect(parsejson('path/to/file.json')).rejects.toThrow('File read error');
        expect(logger.error).toHaveBeenCalled();
    });
});

     
    it('should handle file read errors', async () => {
        const mockReadStream = new Readable();
        mockReadStream._read = () => {}; // No-op
        (fs.createReadStream as jest.Mock).mockReturnValue(mockReadStream);

        process.nextTick(() => {
            mockReadStream.emit('error', new Error('File read error'));
        });

        await expect(parsejson('path/to/file.json')).rejects.toThrow('File read error');
        expect(logger.error).toHaveBeenCalled();
    });