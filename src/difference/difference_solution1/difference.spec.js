import { arrayDifference } from './difference.js';

describe('extreme cases', () => {
  describe('empty inputs', () => {
    it('should return empty for an empty array and default values', () => {
      const actual = arrayDifference([]);
      expect(actual).toEqual([]);
    });
    it('should return empty for an empty array and an empty values', () => {
      const actual = arrayDifference([], []);
      expect(actual).toEqual([]);
    });
    it('should return empty for an empty array', () => {
      const actual = arrayDifference([], [1, 2, 1]);
      expect(actual).toEqual([]);
    });
    it('should return empty for default values', () => {
      const actual = arrayDifference();
      expect(actual).toEqual([]);
    });
  });
});
