import AppRouting from 'common/components/routes/AppRouting';
import { HistoryRouter, history } from 'common/components/routes/HistoryRouter';
import { Suspense, useEffect, useState } from 'react';
import 'styles/main.scss';

const App: React.FC = () => {
  return (
    <HistoryRouter history={history}>
      <Suspense fallback={null}>
        <AppRouting />
      </Suspense>
    </HistoryRouter>
  );
};

export default App;
