import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import OffersList from './offers-list';

const mockOffers = [offerTestObj];

it(`OffersList correctly renders`, () => {
  const tree = renderer
    .create(<Router>
      <OffersList
        activeOffers={mockOffers}
        setActiveOfferId={() => {}}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
