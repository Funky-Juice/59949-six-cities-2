import {offerPropTypes} from '../../prop-types/prop-types';
import {Component} from 'react';
import {connect} from 'react-redux';
import ActionCreator from '../../store/actions';


class CitiesList extends Component {
  constructor(props) {
    super(props);

    this.activeTab = 0;
    this.filteredCitiesList = [];

    this.offers = this.props.offers;
    this.setActiveCity = this.props.setActiveCity;
    this.setActiveOffers = this.props.setActiveOffers;
  }

  componentDidMount() {
    const activeCity = this.filteredCitiesList[this.activeTab];

    this.setActiveCity(activeCity);
    this._setActiveOffers(activeCity);
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

  handleClick(city, index) {
    this.activeTab = index;
    this.setActiveCity(city);
    this._setActiveOffers(city);
  }

  render() {
    this._filterCities();

    return <>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {this.filteredCitiesList.map((city, i) => (
              <li className="locations__item" key={i}>
                <a
                  className={`locations__item-link tabs__item ${i === this.activeTab && `tabs__item--active`}`}
                  href="#"
                  onClick={() => this.handleClick(city, i)}
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
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    activeCity: state.activeCity
  });
};

const mapDispatchToProps = (dispatch) => ({
  setActiveCity: (city) => dispatch(ActionCreator.setActiveCity(city)),
  setActiveOffers: (offers) => dispatch(ActionCreator.setActiveOffers(offers))
});


CitiesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  setActiveCity: PropTypes.func.isRequired,
  setActiveOffers: PropTypes.func.isRequired
};

export {CitiesList};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
