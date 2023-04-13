import React from 'react';
import { Layout as AntLayout} from 'antd';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideMenu from '../Header/SideMenu';
import 'antd/dist/reset.css';
import AppRoutes from '../AppRoutes/AppRoutes';
import { ConfigProvider } from 'antd';

const  { Content } = AntLayout;


const Layout = () => {

  return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#6C43BF',
          },}}
      >
        <AntLayout>
          <Header />
          <AntLayout>
            <SideMenu />
            <Content>
              <AppRoutes />
            </Content>
          </AntLayout>
          <Footer />
        </AntLayout>
      </ConfigProvider>
  );
};

export default Layout;
