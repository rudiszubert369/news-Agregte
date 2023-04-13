import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Result, Button } from 'antd';

type NotFoundProps = {
  error?: string;
};

const NotFound = ({ error }: NotFoundProps) => {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle={
          <FormattedMessage
            id={error || 'notFound404'}
            defaultMessage="Sorry, the page you visited does not exist."
            description="Not found 404 message"
          />
        }
        extra={
          <Link to="/">
            <Button type="primary">
              <FormattedMessage id="goBackHome" defaultMessage="Go back home" />
            </Button>
          </Link>
        }
      />
    </>
  );
};

export default NotFound;
