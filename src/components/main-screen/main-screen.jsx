import PropTypes from "prop-types";

const MainScreen = (props) => {
  const {offers} = props;

  return <div className="cities">
    <div className="cities__places-container container">
      <section className="cities__places places">
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer, i) =>
            <article className="cities__place-card place-card" key={offer + i}>
              <div className="cities__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"></img>
                </a>
              </div>
              <div className="place-card__info">
                <h2 className="place-card__name">
                  <a href="#">{offer}</a>
                </h2>
              </div>
            </article>
          )}
        </div>
      </section>
    </div>
  </div>;
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MainScreen;
