import ReactDOM from 'react-dom';
import App from './components/app/app';

const init = () => {
  const offers = [`Beautiful &amp; luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];

  ReactDOM.render(
      <App offers={offers}/>,
      document.getElementById(`root`)
  );
};

init();
