import React = require('react');
import { fetchTranslation } from '../../helpers/i18n';

export function HomePage(): JSX.Element {
  return (
    <p>
      {fetchTranslation('Hello_World')} - {fetchTranslation('Nav_Home')}
    </p>
  );
}
