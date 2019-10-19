const MainScreen = () => {
  return <div className="cities">
    <div className="cities__places-container container">
      <section className="cities__places places">
        <div className="cities__places-list places__list tabs__content">
          <article className="cities__place-card place-card">
            <div className="cities__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"></img>
              </a>
            </div>
            <div className="place-card__info">
              <h2 className="place-card__name">
                <a href="#">Beautiful &amp; luxurious apartment at great location</a>
              </h2>
            </div>
          </article>

          <article className="cities__place-card place-card">
            <div className="cities__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"></img>
              </a>
            </div>
            <div className="place-card__info">
              <h2 className="place-card__name">
                <a href="#">Wood and stone place</a>
              </h2>
            </div>
          </article>

          <article className="cities__place-card place-card">
            <div className="cities__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"></img>
              </a>
            </div>
            <div className="place-card__info">
              <h2 className="place-card__name">
                <a href="#">Canal View Prinsengracht</a>
              </h2>
            </div>
          </article>

          <article className="cities__place-card place-card">
            <div className="cities__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"></img>
              </a>
            </div>
            <div className="place-card__info">
              <h2 className="place-card__name">
                <a href="#">Nice, cozy, warm big bed apartment</a>
              </h2>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>;
};

export default MainScreen;
