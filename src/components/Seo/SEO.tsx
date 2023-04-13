import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

const SEO = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'title' }); 
  const description = intl.formatMessage({ id: 'description' }); 

  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${process.env.PUBLIC_URL}/favicon.png`}
      />
    </Helmet>
  );
};

export default SEO;