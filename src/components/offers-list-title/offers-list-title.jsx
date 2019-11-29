import {activeCityPropTypes, offerPropTypes} from '../../prop-types/prop-types';
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
  activeCity: activeCityPropTypes
};

export default OffersListTitle;
