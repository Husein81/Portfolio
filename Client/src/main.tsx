import ReactDOM from 'react-dom/client';
import './app/layouts/index.css'
import App from './app/layouts/App';
import { Provider } from 'react-redux';
import {store} from './app/redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App/>
  </Provider>
)
