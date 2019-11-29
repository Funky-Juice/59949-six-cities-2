import renderer from 'react-test-renderer';
import OffersListSort from './offers-list-sort';
import offerTestObj from '../../mocks/test-offer';

it(`OffersListSort correctly renders`, () => {
  const answerCB = jest.fn();
  const tree = renderer
    .create(<OffersListSort
      isVisible={false}
      activeCity={offerTestObj.city}
      activeItem={-1}
      activeOffers={[offerTestObj]}
      onItemClick={answerCB}
      onVisibleChange={answerCB}
      setActiveOffers={answerCB}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
