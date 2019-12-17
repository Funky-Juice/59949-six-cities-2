import {offerPropTypes} from '../../prop-types/prop-types';

const withReviewForm = (Component) => {
  class WithReviewForm extends React.PureComponent {
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

    componentDidUpdate(prevProps, prevState) {
      if (prevState.reviewText !== this.state.reviewText || prevState.rating !== this.state.rating) {
        this._validateFields(this.state);
      }
    }

    _handleTextChange(evt) {
      this.setState({reviewText: evt.target.value});
    }

    _handleRatingChange(evt) {
      this.setState({rating: Number(evt.target.value)});
    }

    _validateFields(state) {
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

    _handleFormSubmit(evt) {
      const {isLocked, rating, reviewText} = this.state;
      const {offer} = this.props;

      evt.preventDefault();
      if (isLocked) {
        return;
      }

      this.setState(() => ({
        isLocked: true,
        message: null
      }));

      this.props.sendReview({
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
      return <Component
        {...this.props}
        rating={this.state.rating}
        message={this.state.message}
        isLocked={this.state.isLocked}
        reviewText={this.state.reviewText}
        onTextChange={this._handleTextChange}
        onRatingChange={this._handleRatingChange}
        onFormSubmit={this._handleFormSubmit}
      />;
    }
  }

  WithReviewForm.propTypes = {
    offer: offerPropTypes,
    sendReview: PropTypes.func.isRequired
  };

  return WithReviewForm;
};

export default withReviewForm;
