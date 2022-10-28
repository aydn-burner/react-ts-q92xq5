import React from 'react';
import { useNavigate } from 'react-router-dom';
import { INavigationItemRoutes, setupRoutes } from '../../routes';
import { NavigationItem } from './NavigationItem/NaviagtionItem';

export function SideNavigation(): JSX.Element {
  const navList = setupRoutes;
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);

  const onClickLogo = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate('/');
  };

  const redirect = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
    item: INavigationItemRoutes
  ) => {
    event.preventDefault();
    navigate(item.route);
  };

  const onCollapseEvent = () => {
    setCollapsed(collapsed);
  };

  return (
    <div className="ap-navigation-demo-wrapper">
      <NavigationItem
        width={280}
        className="sitedemo"
        navList={navList}
        onClickLogo={onClickLogo}
        onClickItem={redirect}
        selectedIndex={0}
        onClickCollapseEvent={onCollapseEvent}
        titleTemplate={() => '- CAS Admin Interface'}
      />
    </div>
  );
}
