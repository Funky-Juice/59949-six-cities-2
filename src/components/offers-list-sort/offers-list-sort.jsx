import {offerPropTypes} from '../../prop-types/prop-types';

class OffersListSort extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showSortList: false
    };

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

  _sortByClickHandler() {
    this.setState((prevState) => ({
      showSortList: !prevState.showSortList
    }));
  }

  _sortTypeClickHandler(index) {
    const {onItemClick} = this.props;

    onItemClick(index);
    this.setState({showSortList: false});
    this._sortOffers();
  }

  _sortOffers() {
    const {activeOffers} = this.props;
    console.log(activeOffers);
  }

  _renderSortForm() {

    return <>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>

        <span className="places__sorting-type" tabIndex="0" onClick={this._sortByClickHandler}>
          Popular
          <svg
            className="places__sorting-arrow"
            style={{transform: `rotateX(${ this.state.showSortList ? `180` : `0`}deg)`}}
            width="7"
            height="4"
          >
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>

        <ul
          className="places__options places__options--custom places__options--opened"
          style={{display: `${ this.state.showSortList ? `block` : `none`}`}}
        >
          {/* <li className="places__option places__option--active" tabIndex="0">Popular</li>*/}
          {/* <li className="places__option" tabIndex="0">Price: low to high</li>*/}
          {/* <li className="places__option" tabIndex="0">Price: high to low</li>*/}
          {/* <li className="places__option" tabIndex="0">Top rated first</li>*/}

          {this.sortTypes.map((sort, i) => (
            <li
              key={i}
              className={`places__option ${i === this.activeItem && `places__option--active`}`}
              onClick={() => this._sortTypeClickHandler(i)}>{sort}
            </li>
          ))}
        </ul>

        <select className="places__sorting-type" id="places-sorting" style={{display: `none`}}>
          <option className="places__option" value="popular" selected="">Popular</option>
          <option className="places__option" value="to-high">Price: low to high</option>
          <option className="places__option" value="to-low">Price: high to low</option>
          <option className="places__option" value="top-rated">Top rated first</option>
        </select>
      </form>
    </>;
  }

  render() {
    return this._renderSortForm();
  }
}

OffersListSort.propTypes = {
  activeItem: PropTypes.number.isRequired,
  onItemClick: PropTypes.func.isRequired,
  activeOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default OffersListSort;
