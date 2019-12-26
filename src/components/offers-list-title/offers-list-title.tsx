import {City, Offer} from '../../types/interfaces';
import {getPlural} from '../../utils/utils';

interface Props {
  activeCity: City
  activeOffers: Offer[]
}

const OffersListTitle = (props: Props) => {
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

export default OffersListTitle;
