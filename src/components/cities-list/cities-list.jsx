import {offerPropTypes} from '../../prop-types/prop-types';

const CitiesList = (props) => {
  const {offers} = props;
  const citiesList = [];

  offers.map((offer) => citiesList.push(offer.city));
  const filteredCitiesList = [...new Set(citiesList.map(JSON.stringify))].map(JSON.parse);

  return <>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {filteredCitiesList.map((city, i) => (
            <li className="locations__item" key={i}>
              <a
                className={`locations__item-link tabs__item ${i === 0 && `tabs__item--active`}`}
                href="#"
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </>;
};

CitiesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default CitiesList;
