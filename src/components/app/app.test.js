import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import App from './app';

const mockOffers = [offerTestObj];

const createNodeMock = () => document.createElement(`div`);

it(`App correctly renders`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<App offers={mockOffers}/>, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
