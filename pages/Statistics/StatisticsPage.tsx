import * as React from 'react';
import { fetchTranslation } from '../../helpers/i18n';

export function StatisticsPage(): JSX.Element {
  const body = (
    <p>
      {fetchTranslation('Hello_World')} - {fetchTranslation('Nav_Statistics')}
    </p>
  );
  return body;
}
