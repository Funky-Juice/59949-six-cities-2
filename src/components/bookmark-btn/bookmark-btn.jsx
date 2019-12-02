import {offerPropTypes} from '../../prop-types/prop-types';

class BookmarkBtn extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _renderBtn() {
    const {offer, btnClass} = this.props;

    return <>
      <button
        className={`
          button
          ${btnClass}__bookmark-button
          ${offer.is_favorite ? `${btnClass}__bookmark-button--active` : ``}
        `}
        type="button"
      >
        <svg
          className={`${btnClass}__bookmark-icon`}
          width={btnClass === `property` ? `31` : `18`}
          height={btnClass === `property` ? `33` : `19`}
        >
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{offer.is_favorite ? `In bookmarks` : `To bookmarks`}</span>
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
};

export default BookmarkBtn;
