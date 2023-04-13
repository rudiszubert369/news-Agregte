import { VIEW_TYPE_LIST, VIEW_TYPE_TILE } from './constants';

export type NewsArticle = {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  author: string;
  content: string;
  publishedAt: string;
  source: {
    name: string;
  };
  onClick?: () => void;
};

export interface NewsProps {
  news: NewsArticle[];
}
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: NewsArticle | null;
}

export enum Language {
  EN = 'en',
  PL = 'pl',
}

export interface LanguageState {
  language: Language;
}

export type ViewType = typeof VIEW_TYPE_LIST | typeof VIEW_TYPE_TILE;

export interface Country {
  code: string;
  name: string;
}