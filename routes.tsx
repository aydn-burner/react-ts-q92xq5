import * as React from 'react';
import { fetchTranslation } from './helpers/';
import { HomePage } from './pages/Home';
import { StatisticsPage } from './pages/Statistics';

export interface INavigationItemRoutes {
  name: string;
  route?: string;
  component?: JSX.Element;
  key?: string;
}

export const setupRoutes: INavigationItemRoutes[] = [
  {
    name: fetchTranslation('Nav_Home'),
    route: '/home',
    component: <HomePage />,
    key: 'home',
  },
  {
    name: fetchTranslation('Nav_Statistics'),
    route: '/Statistics',
    component: <StatisticsPage />,
    key: 'Statistics',
  },
];
