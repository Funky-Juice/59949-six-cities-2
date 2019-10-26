import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';

const init = (data) => {
  ReactDOM.render(
      <App offers={data}/>,
      document.getElementById(`root`)
  );
};

init(offers);
