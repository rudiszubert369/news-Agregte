import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { COUNTRY_ROUTE } from '../../constants';
import MainContent from '../Main/Content/MainContent';
import NotFound from '../Main/NotFound/NotFound';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path={`${COUNTRY_ROUTE}:countryName`}  element={<MainContent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default AppRoutes;
