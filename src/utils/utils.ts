import { DateTime } from 'luxon';
import { SUPPORTED_COUNTRIES_LIST, DEFAULT_COUNTRY_NAME } from '../constants';

export const formatPublishedDate = (publishedAt: string): string => {
  const dateTime = DateTime.fromISO(publishedAt, { zone: 'utc' });
  return dateTime.toFormat('HH:mm yyyy/MM/dd');
};

export const getCountryCode = (countryName: string): string | null => {
  const country = SUPPORTED_COUNTRIES_LIST.find(c => c.name === countryName);
  return country?.code || '';
};

export const replaceSpaceWithHyphen = (str: string): string => {
  return str.replace(/[\s-]+/g, '-');
};

export const replaceHyphenWithSpace = (str: string): string => {
  return str.replace(/-/g, ' ');
}

export const getCountryInfo = (countryName: string | undefined) => {
  const countryNameWithSpaces = replaceHyphenWithSpace(countryName ?? DEFAULT_COUNTRY_NAME);
  const countryCode = getCountryCode(countryNameWithSpaces);
  return { countryCode, countryNameWithSpaces };
};
