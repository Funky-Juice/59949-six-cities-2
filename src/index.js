import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import ActionCreator from './store/actions';
import store from './store/store';

import App from './components/app';

const init = () => {
  store.dispatch(ActionCreator.getUser())
    .then(() => {
      if (location.pathname === `/favorites`) {
        store.dispatch(ActionCreator.getFavoriteOffers());
      } else {
        store.dispatch(ActionCreator.getOffers());
      }
    });

  setTimeout(() => {
    ReactDOM.render(<Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>,
    document.getElementById(`root`));
  }, 200);
};

init();
