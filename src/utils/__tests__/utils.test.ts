import {
  formatPublishedDate,
  getCountryCode,
  replaceSpaceWithHyphen,
  replaceHyphenWithSpace,
  getCountryInfo
} from '../utils';

describe('getCountryCode', () => {
  it('returns the country code for a valid country name', () => {
    const countryName = 'Poland';
    const countryCode = 'pl';
    expect(getCountryCode(countryName)).toEqual(countryCode);
  });
});

describe('formatPublishedDate', () => {
  it('returns a formatted date string for a valid date', () => {
    const publishedAt = '2022-03-25T15:30:00Z';
    const expectedDateString = '15:30 2022/03/25';
    expect(formatPublishedDate(publishedAt)).toEqual(expectedDateString);
  });
});

describe('replaceSpaceWithHyphen', () => {
  it('replaces spaces with hyphens in a string', () => {
    const str = 'This is a test string';
    const expectedString = 'This-is-a-test-string';
    expect(replaceSpaceWithHyphen(str)).toEqual(expectedString);
  });
});

describe('replaceHyphenWithSpace', () => {
  it('replaces hyphens with spaces in a string', () => {
    const str = 'This-is-a-test-string';
    const expectedString = 'This is a test string';
    expect(replaceHyphenWithSpace(str)).toEqual(expectedString);
  });
});

describe('getCountryInfo', () => {
  it('returns the correct country code and name with spaces', () => {
    const countryName = 'United-States';
    const expectedCountryCode = 'us';
    const expectedCountryNameWithSpaces = 'United States';
    expect(getCountryInfo(countryName)).toEqual({ countryCode: expectedCountryCode, countryNameWithSpaces: expectedCountryNameWithSpaces });
  });
  
  it('returns default values if no country name is provided', () => {
      const expectedCountryCode = 'pl';
      const expectedCountryNameWithSpaces = 'Poland';
      expect(getCountryInfo(undefined)).toEqual({ countryCode: expectedCountryCode, countryNameWithSpaces: expectedCountryNameWithSpaces });
    });
  });
  
  describe('formatPublishedDate', () => {
    it('returns a formatted date string for a valid date', () => {
      const publishedAt = '2022-03-25T15:30:00Z';
      const expectedDateString = '15:30 2022/03/25';
      expect(formatPublishedDate(publishedAt)).toEqual(expectedDateString);
    });
  });
  
  describe('replaceSpaceWithHyphen', () => {
    it('replaces spaces with hyphens in a string', () => {
      const str = 'This is a test string';
      const expectedString = 'This-is-a-test-string';
      expect(replaceSpaceWithHyphen(str)).toEqual(expectedString);
    });
  });
  
  describe('replaceHyphenWithSpace', () => {
    it('replaces hyphens with spaces in a string', () => {
      const str = 'This-is-a-test-string';
      const expectedString = 'This is a test string';
      expect(replaceHyphenWithSpace(str)).toEqual(expectedString);
    });
  });  