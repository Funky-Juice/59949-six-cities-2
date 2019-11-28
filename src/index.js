import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ActionCreator from './store/actions';
import store from './store/store';

import App from './components/app';

const init = () => {
  store.dispatch(ActionCreator.getUser())
    .then(() => {
      store.dispatch(ActionCreator.getOffers());
    });

  setTimeout(() => {
    ReactDOM.render(<Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`));
  }, 200);
};

init();
