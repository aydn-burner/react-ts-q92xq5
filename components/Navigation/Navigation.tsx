import React = require('react');
import { useNavigate } from 'react-router-dom';
import { INavigationItemRoutes, setupRoutes } from '../../routes';
import { NavigationItem } from './NavigationItem';

export function Navigation(): JSX.Element {
  const navList = setupRoutes;
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);

  const redirect = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
    item: INavigationItemRoutes
  ) => {
    event.preventDefault();
    navigate(item.route);
  };

  return (
    <div className="ap-navigation-demo-wrapper">
      <NavigationItem
        width={280}
        className="sitedemo"
        navList={navList}
        onClickItem={redirect}
        selectedIndex={0}
        titleTemplate={() => 'Nav -'}
      />
    </div>
  );
}
