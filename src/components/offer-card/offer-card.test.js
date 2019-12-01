import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import OfferCard from './offer-card';

const mockOffer = offerTestObj;

it(`OfferCard correctly renders`, () => {
  const tree = renderer
    .create(<Router>
      <OfferCard
        offer={mockOffer}
        showOffer={() => {}}
        getOfferDetails={() => {}}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
