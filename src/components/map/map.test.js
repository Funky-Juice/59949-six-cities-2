import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import Map from './map';

const mockOffers = [offerTestObj];

const createNodeMock = () => document.createElement(`div`);


it(`Map correctly renders`, () => {
  const options = {createNodeMock};

  const tree = renderer
    .create(<Map offers={mockOffers}/>, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
