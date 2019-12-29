import {ChangeEvent, FormEvent} from 'react';
import {Offer} from '../../types/interfaces';

interface Props {
  offer: Offer
  sendReview: (data: object) => Promise<any>
}

interface State {
  isLocked: boolean
  reviewText: string
  rating: number
  message: null | string
}

const withReviewForm = (Component) => {
  return class WithReviewForm extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this.state = {
        isLocked: true,
        reviewText: ``,
        rating: 0,
        message: null
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>) {
      if (prevState.reviewText !== this.state.reviewText || prevState.rating !== this.state.rating) {
        this._validateFields(this.state);
      }
    }

    _handleTextChange(evt: ChangeEvent<HTMLTextAreaElement>) {
      this.setState({reviewText: evt.target.value});
    }

    _handleRatingChange(evt: ChangeEvent<HTMLInputElement>) {
      this.setState({rating: Number(evt.target.value)});
    }

    _validateFields(state: State) {
      const {rating, reviewText} = state;
      const MIN_CHARACTERS = 50;
      const MAX_CHARACTERS = 300;

      const isValid = rating > 0 && reviewText.length >= MIN_CHARACTERS && reviewText.length <= MAX_CHARACTERS;

      this.setState({isLocked: !isValid});
    }

    _clearFormFields() {
      this.setState(() => ({
        rating: 0,
        reviewText: ``,
        isLocked: true
      }));
    }

    _handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
      const {isLocked, rating, reviewText} = this.state;
      const {offer, sendReview} = this.props;

      evt.preventDefault();
      if (isLocked) {
        return;
      }

      this.setState(() => ({
        isLocked: true,
        message: null
      }));

      sendReview({
        rating,
        reviewText,
        id: offer.id
      })
        .then(() => {
          this._clearFormFields();
        })
        .catch((err) => {
          this.setState(() => ({
            isLocked: false,
            message: err.message
          }));
        });
    }

    render() {
      const {rating, message, isLocked, reviewText} = this.state;

      return <Component
        {...this.props}
        rating={rating}
        message={message}
        isLocked={isLocked}
        reviewText={reviewText}
        onTextChange={this._handleTextChange}
        onRatingChange={this._handleRatingChange}
        onFormSubmit={this._handleFormSubmit}
      />;
    }
  }
};

export default withReviewForm;
