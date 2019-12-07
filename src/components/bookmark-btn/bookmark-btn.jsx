import {offerPropTypes} from '../../prop-types/prop-types';

class BookmarkBtn extends React.PureComponent {
  constructor(props) {
    super(props);

    this._setBookmarkHandler = this._setBookmarkHandler.bind(this);
  }

  get isVisible() {
    return this.props.isVisible;
  }

  componentDidMount() {
    const {onVisibleChange} = this.props;
    onVisibleChange(this.props.offer.is_favorite);
  }

  _setBookmarkHandler(id) {
    const {setBookmark, onVisibleChange, deleteOffer} = this.props;

    setBookmark({
      id,
      status: this.isVisible ? 0 : 1
    })
      .then((res) => {
        if (location.pathname === `/favorites`) {
          deleteOffer(res.id);
        } else {
          onVisibleChange(res.is_favorite);
        }
      });
  }

  _renderBtn() {
    const {offer, btnClass} = this.props;

    return <>
      <button
        className={`
          button
          ${btnClass}__bookmark-button
          ${this.isVisible ? `${btnClass}__bookmark-button--active` : ``}
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
        <span className="visually-hidden">{this.isVisible ? `In bookmarks` : `To bookmarks`}</span>
      </button>
    </>;
  }

  render() {
    return this._renderBtn();
  }
}

BookmarkBtn.propTypes = {
  offer: offerPropTypes,
  deleteOffer: PropTypes.func,
  btnClass: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  setBookmark: PropTypes.func.isRequired,
  onVisibleChange: PropTypes.func.isRequired
};

export default BookmarkBtn;
