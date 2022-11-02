import React = require('react');
import { fetchTranslation } from '../helpers';
import { HomePage } from '../pages/Home';
import { StatisticsPage } from '../pages/Statistics';
import { INavigationItemRoutes } from '../routes';

const truth: INavigationItemRoutes[] = [
  {
    name: 'Home',
    route: '/home',
    component: <HomePage />,
    key: 'home',
  },
  {
    name: 'Statistics',
    route: '/Statistics',
    component: <StatisticsPage />,
    key: 'Statistics',
  },
];

test('setting up routes with dynamic names', () => {
  const routes: INavigationItemRoutes[] = [
    {
      name: fetchTranslation('Home'),
      route: '/home',
      component: <HomePage />,
      key: 'home',
    },
    {
      name: fetchTranslation('Nav_Statistics');
      route: '/Statistics',
      component: <StatisticsPage />,
      key: 'Statistics',
    },
  ];
  expect(routes).toEqual(truth);
})
