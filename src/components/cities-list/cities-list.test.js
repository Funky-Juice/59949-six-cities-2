import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import CitiesList from './cities-list';

const mockOffers = [offerTestObj];

it(`CitiesList correctly renders`, () => {
  const tree = renderer
    .create(<CitiesList
      offers={mockOffers}
      activeItem={0}
      onItemClick={() => {}}
      setActiveCity={() => {}}
      setActiveOffers={() => {}}
      setActiveOfferId={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
