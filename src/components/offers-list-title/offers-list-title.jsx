import {offerPropTypes} from '../../prop-types/prop-types';
import {getPlural} from '../../utils/utils';

const OffersListTitle = (props) => {
  const {activeCity, activeOffers} = props;

  return <>
    {activeCity.name && activeOffers.length > 0 && <>
      <b className="places__found">
        {activeOffers.length}&nbsp;
        {getPlural(activeOffers.length, `place`, `places`, `places`)} to stay in {activeCity.name}
      </b>
    </>}
  </>;
};

OffersListTitle.propTypes = {
  activeOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeCity: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  }).isRequired
};

export default OffersListTitle;
