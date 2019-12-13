import {shallow} from 'enzyme';
import withForm from './with-form';
import offerTestObj from '../../mocks/test-offer';

describe(`HOC withForm should work correctly`, () => {
  let wrapper;
  const MockComponent = () => <form/>;
  const MockComponentWrapped = withForm(MockComponent);
  const promise = Promise.resolve();
  const sendReviewCB = jest.fn(() => promise);

  beforeEach(() => {
    wrapper = shallow(<MockComponentWrapped
      offer={offerTestObj}
      sendReview={sendReviewCB}
    />);
  });

  it(`Initial state should be on default...`, () => {
    expect(wrapper.state()).toEqual({
      isLocked: true,
      reviewText: ``,
      rating: 0,
      message: null
    });
  });

  it(`Should set reviewText state correctly on text change handler`, () => {
    const evt = {target: {value: `review text`}};

    wrapper.instance()._handleTextChange(evt);
    expect(wrapper.state().reviewText).toBe(`review text`);
  });

  it(`Should set rating state correctly on rating change handler`, () => {
    const evt = {target: {value: `2`}};

    wrapper.instance()._handleRatingChange(evt);
    expect(wrapper.state().rating).toBe(2);
  });

  it(`Should set isLocked state 'true' on form submit handler`, () => {
    const evt = {preventDefault: jest.fn()};

    wrapper.setState({isLocked: false});
    expect(wrapper.state().isLocked).toBe(false);

    wrapper.instance()._handleFormSubmit(evt);
    expect(wrapper.state().isLocked).toBe(true);
  });

  it(`Should reset message state to null on form submit handler`, () => {
    const evt = {preventDefault: jest.fn()};
    wrapper.setState({isLocked: false});

    wrapper.setState({message: `error text`});
    expect(wrapper.state().message).toBe(`error text`);

    wrapper.instance()._handleFormSubmit(evt);
    expect(wrapper.state().message).toBe(null);
  });

  it(`Should call sendReviewCB on form submit handler`, () => {
    const evt = {preventDefault: jest.fn()};
    const mockParams = {
      id: offerTestObj.id,
      rating: wrapper.state().rating,
      reviewText: wrapper.state().reviewText
    };

    wrapper.setState({isLocked: false});
    wrapper.instance()._handleFormSubmit(evt);

    expect(sendReviewCB).toHaveBeenCalled();
    expect(sendReviewCB.mock.calls[0][0]).toEqual(mockParams);
  });
});
