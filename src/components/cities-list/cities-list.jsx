import {offerPropTypes} from '../../prop-types/prop-types';

class CitiesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.filteredCitiesList = [];

    this.offers = this.props.offers;
    this.setActiveCity = this.props.setActiveCity;
    this.setActiveOffers = this.props.setActiveOffers;
    this.setActiveOfferId = this.props.setActiveOfferId;
  }

  get activeItem() {
    let {activeItem} = this.props;
    if (!activeItem || activeItem < 0 || activeItem > this.filteredCitiesList.length - 1) {
      return 0;
    }
    return activeItem;
  }

  get activeCity() {
    return this.filteredCitiesList[this.activeItem];
  }

  componentDidMount() {
    this._putDataToStore();
  }

  componentDidUpdate() {
    this._putDataToStore();
  }

  _putDataToStore() {
    this.setActiveOfferId();
    this.setActiveCity(this.activeCity);
    this._setActiveOffers(this.activeCity);
  }

  _filterCities() {
    const tempCitiesArr = [];
    this.offers.map((offer) => tempCitiesArr.push(offer.city));
    this.filteredCitiesList = [...new Set(tempCitiesArr.map(JSON.stringify))].map(JSON.parse);
  }

  _setActiveOffers(city) {
    const cityOffers = this.offers.filter((it) => (it.city.name === city.name));
    this.setActiveOffers(cityOffers);
  }

  _renderCities(citites) {
    const {onItemClick} = this.props;

    return <>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {citites.map((city, i) => (
              <li className="locations__item" key={i}>
                <a
                  className={`locations__item-link tabs__item ${i === this.activeItem && `tabs__item--active`}`}
                  href="#"
                  onClick={() => onItemClick(i)}
                >
                  <span>{city.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>;
  }

  render() {
    this._filterCities();
    return this._renderCities(this.filteredCitiesList);
  }
}

CitiesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeItem: PropTypes.number.isRequired,
  onItemClick: PropTypes.func.isRequired,
  setActiveCity: PropTypes.func.isRequired,
  setActiveOffers: PropTypes.func.isRequired,
  setActiveOfferId: PropTypes.func.isRequired
};

export default CitiesList;
