import React from 'react';
import { fetchTranslation } from '../../helpers/i18n';

export function HomePage(): JSX.Element {
  const body = (
    <div>
      <p>
        {fetchTranslation('Hello_World')} - {fetchTranslation('Nav_Home')}
      </p>
    </div>
  );
  return body;
}
