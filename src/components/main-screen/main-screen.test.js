import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import MainScreen from './main-screen';

const mockOffers = [offerTestObj];

const createNodeMock = () => document.createElement(`div`);

it(`MainScreen correctly renders`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<MainScreen offers={mockOffers}/>, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
