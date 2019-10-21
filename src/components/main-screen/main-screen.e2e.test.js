import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainScreen from './main-screen';

Enzyme.configure({adapter: new Adapter()});

it(`MainScreen offer title click handler`, () => {
  const clickHandler = jest.fn();
  const mainScreen = shallow(<MainScreen
    offers={[`offer`]}
    showOffer={clickHandler}
  />);

  const offerTitle = mainScreen.find(`h2.place-card__name`);
  offerTitle.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
