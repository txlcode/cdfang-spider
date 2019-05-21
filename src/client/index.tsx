import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/Loading';
import AppContextProvider from './context/appContextProvider';
import { LOADING_TIP } from './constants';

const { lazy, Suspense } = React;

const App = lazy(() => import('./containers/App'));

ReactDOM.render(
  <Suspense fallback={<Loading height="100vh" tip={LOADING_TIP} />}>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </Suspense>,
  document.getElementById('root')
);
