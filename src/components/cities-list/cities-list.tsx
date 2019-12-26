import {Offer, City} from '../../types/interfaces';

interface Props {
  offers: Offer[]
  activeItem: number
  onItemClick: (index: number) => void
  setActiveCity: (city: City) => void
  setActiveOffers: (offers: Offer[]) => void
  setActiveOfferId: () => void
}

class CitiesList extends React.PureComponent<Props> {
  private filteredCitiesList: City[];
  private readonly setActiveOfferId: () => void;
  private readonly setActiveCity: (city: City) => void;
  private readonly setActiveOffers: (offers: Offer[]) => void;

  constructor(props) {
    super(props);

    this.filteredCitiesList = [];
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

  componentDidUpdate(prevProps: Readonly<any>) {
    if (prevProps.activeItem !== this.props.activeItem) {
      this._putDataToStore();
    }
  }

  _putDataToStore() {
    this.setActiveOfferId();
    this.setActiveCity(this.activeCity);
    this._setActiveOffers(this.activeCity);
  }

  _filterCities(offers: Offer[]) {
    const tempCitiesArr = [];

    offers.map((offer: Offer) => tempCitiesArr.push(offer.city));

    this.filteredCitiesList = [...new Set(
      tempCitiesArr.map((city: City) => JSON.stringify(city)))
    ].map((it) => JSON.parse(it));
  }

  _setActiveOffers(city: City) {
    const cityOffers = this.props.offers.filter((it) => (it.city.name === city.name));
    this.setActiveOffers(cityOffers);
  }

  _renderCities(citites: City[]) {
    const {onItemClick} = this.props;

    return <>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {citites.map((city: City, i) => (
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
    const {offers} = this.props;

    this._filterCities(offers);
    return this._renderCities(this.filteredCitiesList);
  }
}

export default CitiesList;
