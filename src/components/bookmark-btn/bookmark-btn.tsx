import {Offer} from '../../types/interfaces';

interface Props {
  offer: Offer
  btnClass: string
  isVisible: boolean
  deleteOffer: (id: number) => void
  setBookmark: (data: object) => Promise<any>
  onVisibleChange: (bool: boolean) => void
}

class BookmarkBtn extends React.PureComponent<Props> {
  constructor(props) {
    super(props);

    this._setBookmarkHandler = this._setBookmarkHandler.bind(this);
  }

  get isVisible() {
    return this.props.isVisible;
  }

  componentDidMount() {
    this._setVisibleState();
  }

  componentDidUpdate(prevProps: Readonly<any>) {
    if (prevProps.offer.is_favorite !== this.props.offer.is_favorite) {
      this._setVisibleState();
    }
  }

  _setVisibleState() {
    const {offer, onVisibleChange} = this.props;
    onVisibleChange(offer.is_favorite);
  }

  _setBookmarkHandler(id: number) {
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

export default BookmarkBtn;
