import {BrowserRouter as Router} from 'react-router-dom';
import {mount} from 'enzyme';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import offerTestObj from '../../mocks/test-offer';
import OffersList from './offers-list';

const mockOffers = [offerTestObj];

const store = createStore(() => ({
  activeOffers: mockOffers
}));

describe(`OffersList works correctly`, () => {

  it(`OffersList card onMouseEnter calls setActiveOfferIdCB with offer id`, () => {
    const setActiveOfferIdCB = jest.fn();

    const wrapper = mount(<Provider store={store}>
      <Router>
        <OffersList
          activeOffers={mockOffers}
          setActiveOfferId={setActiveOfferIdCB}
        />
      </Router>
    </Provider>
    );

    const offerCard = wrapper.find(`article.cities__place-card`);
    offerCard.simulate(`mouseenter`);

    expect(setActiveOfferIdCB).toHaveBeenCalledTimes(1);
    expect(setActiveOfferIdCB.mock.calls[0][0]).toEqual(mockOffers[0].id);
  });
});
