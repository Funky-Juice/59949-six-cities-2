import {activeCityPropTypes, offerPropTypes} from '../../prop-types/prop-types';

class OffersListSort extends React.PureComponent {
  constructor(props) {
    super(props);

    this.activeOffers = this.props.activeOffers;
    this.setActiveOffers = this.props.setActiveOffers;
    this._sortByClickHandler = this._sortByClickHandler.bind(this);
    this._sortTypeClickHandler = this._sortTypeClickHandler.bind(this);

    this.sortTypes = [
      `Popular`,
      `Price: low to high`,
      `Price: high to low`,
      `Top rated first`
    ];
  }

  get activeItem() {
    let {activeItem} = this.props;
    if (!activeItem || activeItem < 0 || activeItem > this.sortTypes.length - 1) {
      return 0;
    }
    return activeItem;
  }

  get isVisible() {
    return this.props.isVisible;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeCity !== this.props.activeCity) {
      this.activeOffers = this.props.activeOffers;
    }
  }

  _sortByClickHandler() {
    const {onVisibleChange} = this.props;
    onVisibleChange(!this.isVisible);
  }

  _sortTypeClickHandler(index) {
    const {onItemClick, onVisibleChange} = this.props;

    onItemClick(index);
    onVisibleChange(false);
    this._sortOffers(index);
  }

  _sortOffers(i) {
    const {activeOffers} = this.props;
    const activeOffersClone = [];

    Object.assign(activeOffersClone, activeOffers);

    switch (this.sortTypes[i]) {
      case `Popular`:
        return this._sortByPopular();
      case `Price: low to high`:
        return this._sortByPriceLowToHigh(activeOffersClone);
      case `Price: high to low`:
        return this._sortByPriceHighToLow(activeOffersClone);
      case `Top rated first`:
        return this._sortByTopRated(activeOffersClone);
      default:
        return this.activeOffers;
    }
  }

  _sortByPopular() {
    this.setActiveOffers(this.activeOffers);
  }

  _sortByPriceLowToHigh(offers) {
    offers.sort((a, b) => {
      return a.price - b.price;
    });

    this.setActiveOffers(offers);
  }

  _sortByPriceHighToLow(offers) {
    offers.sort((a, b) => {
      return b.price - a.price;
    });

    this.setActiveOffers(offers);
  }

  _sortByTopRated(offers) {
    offers.sort((a, b) => {
      return b.rating - a.rating;
    });

    this.setActiveOffers(offers);
  }

  _renderSortForm() {
    return <>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>

        <span
          className="places__sorting-type"
          style={{paddingLeft: `5px`}}
          onClick={this._sortByClickHandler}
        >
          {this.sortTypes[this.activeItem]}
          <svg
            className="places__sorting-arrow"
            style={{transform: `rotateX(${ this.isVisible ? `180` : `0`}deg)`}}
            width="7"
            height="4"
          >
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>

        <ul
          className="places__options places__options--custom places__options--opened"
          style={{display: `${ this.isVisible ? `block` : `none`}`}}
        >
          {this.sortTypes.map((sort, i) => (
            <li
              key={i}
              className={`places__option ${i === this.activeItem && `places__option--active`}`}
              onClick={() => this._sortTypeClickHandler(i)}>{sort}
            </li>
          ))}
        </ul>
      </form>
    </>;
  }

  render() {
    return this._renderSortForm();
  }
}

OffersListSort.propTypes = {
  activeCity: activeCityPropTypes,
  isVisible: PropTypes.bool.isRequired,
  activeItem: PropTypes.number.isRequired,
  onItemClick: PropTypes.func.isRequired,
  setActiveOffers: PropTypes.func.isRequired,
  onVisibleChange: PropTypes.func.isRequired,
  activeOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default OffersListSort;
