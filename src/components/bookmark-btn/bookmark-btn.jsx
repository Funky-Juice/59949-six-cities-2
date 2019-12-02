import {offerPropTypes} from '../../prop-types/prop-types';

class BookmarkBtn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: this.props.offer.is_favorite
    };

    this._setBookmarkHandler = this._setBookmarkHandler.bind(this);
  }

  _setBookmarkHandler(id) {
    const {setBookmark} = this.props;

    setBookmark({
      id,
      status: this.state.isActive ? 0 : 1
    })
      .then((res) => {
        this.setState({isActive: res.is_favorite});
      });
  }

  _renderBtn() {
    const {offer, btnClass} = this.props;

    return <>
      <button
        className={`
          button
          ${btnClass}__bookmark-button
          ${this.state.isActive ? `${btnClass}__bookmark-button--active` : ``}
        `}
        onClick={() => this._setBookmarkHandler(offer.id)}
        type="button"
      >
        <svg
          className={`${btnClass}__bookmark-icon`}
          width={btnClass === `property` ? `31` : `18`}
          height={btnClass === `property` ? `33` : `19`}
        >
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{this.state.isActive ? `In bookmarks` : `To bookmarks`}</span>
      </button>
    </>;
  }

  render() {
    return this._renderBtn();
  }
}

BookmarkBtn.propTypes = {
  offer: offerPropTypes,
  btnClass: PropTypes.string.isRequired,
  setBookmark: PropTypes.func.isRequired
};

export default BookmarkBtn;
