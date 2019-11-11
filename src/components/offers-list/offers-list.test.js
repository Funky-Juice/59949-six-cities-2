import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import {OffersList} from './offers-list';

const mockOffers = [offerTestObj];

it(`OffersList correctly renders`, () => {
  const tree = renderer
    .create(<OffersList activeOffers={mockOffers}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
