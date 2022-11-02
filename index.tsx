import React = require('react');
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { setupI18n, setUserLanguage } from './helpers';
import App from './App';

export interface IAppSettings {
  language: string;
}
export function run(appSettings: IAppSettings) {
  setupI18n(setUserLanguage(settings.language));
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);

  root.render(
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  );
}

const settings: IAppSettings = {
  language: 'en',
};
run(settings);
