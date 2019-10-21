import ReactDOM from 'react-dom';
import App from './components/app/app';

const init = () => {
  const offers = [`Beautiful &amp; luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];
  const showOffer = () => {
    return `showOffer`;
  };

  ReactDOM.render(
      <App offers={offers} showOffer={showOffer}/>,
      document.getElementById(`root`)
  );
};

init();
