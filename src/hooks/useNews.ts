import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setArticleCount } from '../reducers/articleCountReducer';
import axios from 'axios';
import instance from './axiosInstance';
import { NewsArticle } from '../types';
import { TOP_HEADLINES_URL, PAGE_SIZE } from '../constants';

export const useNews = (countryCode: string | null) => {
  const dispatch = useDispatch();
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(()=> {
    setNews([]);
    setCurrentPage(1);
    setError('');
  }, [countryCode]);

  useEffect(() => {
    let cancelRequest: (() => void) | undefined;
  
    const fetchNews = async () => {
      try {
        const url = `${TOP_HEADLINES_URL}${countryCode}&pageSize=${PAGE_SIZE}&page=${currentPage}`;
        const response = await instance.get(url, {
        //workaround for useEffect running twice only in development mode
          cancelToken: new axios.CancelToken((c) => (cancelRequest = c)),
        });
        const newArticles = response.data.articles;
        setNews(prevNews => [...prevNews, ...newArticles]);
        setError('');
        setHasMore(newArticles.length > 0);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.error(error);
        setError('networkErr' );
      }
    };

    if (countryCode) {
      fetchNews();
    } else {
      setError('countryNotFoundErr');
    }
  
    return () => {
      if (cancelRequest) cancelRequest();
    };
  }, [countryCode, currentPage]);
  
  useEffect(() => {
    dispatch(setArticleCount({ count: news.length }));
  }, [news, dispatch])

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return { news, error, hasMore, loadMore };
};
