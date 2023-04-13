import { Country } from './types'

export const APP_NAME = 'GnNews';
export const API_KEY = process.env.REACT_APP_API_KEY;
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const TOP_HEADLINES_URL = '/top-headlines?country=';
export const PAGE_SIZE = 10;

export const COUNTRY_ROUTE = '/country/';

export const VIEW_TYPE_TILE = 'tiles';
export const VIEW_TYPE_LIST = 'list';

export const DEFAULT_LANGUAGE_CODE = 'pl';
export const SECONDARY_LANGUAGE_CODE = 'en';
export const DEFAULT_COUNTRY_NAME = 'Poland';
export const DEFAULT_LANGUAGE_NAME = 'Polski';
export const SECONDARY_LANGUAGE_NAME = 'English';

export const SUPPORTED_COUNTRIES_LIST: Country[] = [
  { code: 'ae', name: 'United Arab Emirates' },
  { code: 'ar', name: 'Argentina' },
  { code: 'at', name: 'Austria' },
  { code: 'au', name: 'Australia' },
  { code: 'cn', name: 'China' },
  { code: 'co', name: 'Colombia' },
  { code: 'cu', name: 'Cuba' },
  { code: 'ph', name: 'Philippines' },
  { code: 'pl', name: 'Poland' },
  { code: 'us', name: 'United States' },
];
