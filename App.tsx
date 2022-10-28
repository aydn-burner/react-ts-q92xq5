import React, { JSXElementConstructor, ReactElement, Key } from 'react';
import './style.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { setupRoutes } from './routes';
import { Navigation } from './components/Navigation/Navigation';

export default function App() {
  const getRoutes = (allRoutes: any[]): any =>
    allRoutes.map(
      (route: {
        route: string;
        component: ReactElement<unknown, string | JSXElementConstructor<any>>;
        key: Key;
      }) => {
        if (route.route) {
          return (
            <Route
              path={route.route}
              element={route.component}
              key={route.key}
            />
          );
        }
        return null;
      }
    );
  return (
    <>
      <Navigation />
      <Routes>
        {getRoutes(setupRoutes)}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}
