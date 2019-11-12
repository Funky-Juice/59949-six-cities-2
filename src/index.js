import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';

import App from './components/app/app';
import {offers} from './mocks/offers';

const init = (data) => {
  ReactDOM.render(<Provider store={store}>
    <App offers={data}/>
  </Provider>,
  document.getElementById(`root`)
  );
};

init(offers);
