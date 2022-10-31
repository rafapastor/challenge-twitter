// test convertTime function
import { ConvertTime } from './convertTime';

describe('ConvertTime', () => {

    // timeDiff mock

    test('test hours', () => {
        // timestamp minus 2 hours
        const timestamp = new Date().getTime() - 7200000;
        expect(ConvertTime(timestamp)).toBe('2 hours ago');
    });

    test('test seconds', () => {
        // timestamp minus 20 seconds
        const timestamp = new Date().getTime() - 20000;
        expect(ConvertTime(timestamp)).toBe('20 seconds ago');
    });

    test('minutes seconds', () => {
        // timestamp minus 20 minutes
        const timestamp = new Date().getTime() - 1200000;
        expect(ConvertTime(timestamp)).toBe('20 minutes ago');
    });

    test('months seconds', () => {
        // timestamp minus 2 months
        const timestamp = new Date().getTime() - 5184000000;
        expect(ConvertTime(timestamp)).toBe('2 months ago');
    });

    test('test years', () => {
        expect(ConvertTime(1580068800000)).toBe('2 years ago');
    }
    );

});