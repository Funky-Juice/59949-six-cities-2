import OfferDetails from '../offer-details/offer-details';
import {offerPropTypes} from '../../prop-types/prop-types';

class OfferDetailsScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _renderScreen() {
    const {offers, match} = this.props;
    const offer = offers.find(({id}) => id === parseInt(match.params.id, 10));

    return <>
      <main className="page__main page__main--property">
        <OfferDetails offer={offer}/>
      </main>
    </>;
  }

  render() {
    const {offers, getOffers} = this.props;

    if (!offers) {
      getOffers();
      return <></>;
    }
    return this._renderScreen();
  }
}

OfferDetailsScreen.propTypes = {
  match: PropTypes.object.isRequired,
  getOffers: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default OfferDetailsScreen;
