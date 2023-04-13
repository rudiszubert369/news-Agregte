import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setView } from '../../reducers/viewReducer';
import { ViewType } from '../../types';
import { RootState } from '../../store';
import { VIEW_TYPE_LIST, VIEW_TYPE_TILE } from '../../constants';
import { FormattedMessage } from 'react-intl';
import { Select } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';

const { Option } = Select;

const ViewSwitcher = () => {
  const dispatch = useDispatch();
  const currentView = useSelector((state: RootState) => state.view.view);

  const handleSetView = (view: ViewType) => {
    dispatch(setView(view));
  };

  return (
    <div data-testid="view-switcher">
      <Select
        value={currentView as ViewType}
        onChange={(value: ViewType) => handleSetView(value)}
        style={{ width: 120 }}
        dropdownMatchSelectWidth={false}
      >
        <Option value={VIEW_TYPE_LIST}>
          <UnorderedListOutlined />
          <FormattedMessage id="listView" />
        </Option>
        <Option value={VIEW_TYPE_TILE}>
          <AppstoreOutlined />
          <FormattedMessage id="tilesView" />
        </Option>
      </Select>
    </div>
  );
};

export default ViewSwitcher;
