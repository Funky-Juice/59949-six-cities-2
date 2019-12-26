interface Props {
  errorMessage: string
}

const ErrorScreen = (props: Props) => {
  const {errorMessage} = props;

  return <>
    <div className="page page--main">
      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper cities__status-wrapper--error tabs__content">
                <b className="cities__status">{errorMessage}</b>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  </>;
};

export default ErrorScreen;
