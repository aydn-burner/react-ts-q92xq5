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
    name: 'hi',
    route: '/home',
    component: <HomePage />,
    key: 'home',
  },
  {
    name: 'bye',
    route: '/Statistics',
    component: <StatisticsPage />,
    key: 'Statistics',
  },
];
