import renderer from 'react-test-renderer';
import OffersListTitle from './offers-list-title';
import offerTestObj from '../../mocks/test-offer';

const mockOffers = [offerTestObj];

it(`OffersListTitle correctly renders`, () => {
  const tree = renderer
    .create(<OffersListTitle
      activeCity={mockOffers[0].city}
      activeOffers={mockOffers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
