import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import { FormattedMessage, useIntl } from 'react-intl';
import { SUPPORTED_COUNTRIES_LIST } from '../../constants'
import { replaceSpaceWithHyphen } from '../../utils/utils';
import { Menu, Drawer, Button, Layout } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import useIsMobile from '../../hooks/useIsMobile';

const { Sider } = Layout;

const SideMenu = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const isMobile = useIsMobile(); 
  const intl = useIntl();

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const menuItems = SUPPORTED_COUNTRIES_LIST.map((country) => ({
    key: country.code,
    label: (
      <>
        <ReactCountryFlag countryCode={country.code} style={{ fontSize: '1.5em', lineHeight: '1.5em' }} aria-label={country.name} />
        <Link to={`/country/${replaceSpaceWithHyphen(country.name)}`}>
          <FormattedMessage
            id={country.code}
            defaultMessage={intl.formatMessage({ id: country.code })}
            values={{ countryName: intl.formatMessage({ id: country.code }) }}
          />
        </Link>
      </>
    ),
    onClick: onCloseDrawer
  }));
  
  return ( 
    <>
     {isMobile ? (
      <>
        <Button
          type="primary"
          onClick={showDrawer}
          style={{
            marginBottom: 16,
            position: 'fixed',
            float: 'right',
            zIndex: '9',
            top: '1px',
            right: '1px'
          }}
          icon={<MenuUnfoldOutlined />}
        >
          Menu
        </Button>
        <Drawer
          title="Menu"
          placement="left"
          closable={true}
          onClose={onCloseDrawer}
          closeIcon={<CloseOutlined />}
          open={drawerVisible}
          key="left"
        >
          <Menu mode="inline" items={menuItems} />
        </Drawer>
      </>
    ) : (
      <Sider style={{ backgroundColor: '#fff'}}>
        <Menu 
          mode="inline"
          items={menuItems}
          style={{
            backgroundColor: '#fff',
            position: 'fixed',
            width: '201px',
            transition: 'all 0.3s',
            overflow: 'auto',
            height: '100vh',
            left: 0,
            zIndex: 999,
          }}
        />
      </Sider>
    )}
    </>
  );
}

export default SideMenu
