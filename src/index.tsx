import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { StoreState } from './types/StoreState';
import { CountAction } from './actions/counter';
import count from './reducers/count';
import { Provider } from 'react-redux';

const store = createStore<StoreState, CountAction, null, null>(count, { count: 0 });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
