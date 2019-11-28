
class OffersListSort extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showSortList: false
    };

    this._sortByClickHandler = this._sortByClickHandler.bind(this);
  }

  _sortByClickHandler() {
    this.setState((prevState) => ({
      showSortList: !prevState.showSortList
    }));
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
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
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

export default OffersListSort;
