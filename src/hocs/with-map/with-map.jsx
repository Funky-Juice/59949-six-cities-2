const withMap = (Component) => {
  return class WithMap extends React.PureComponent {
    constructor(props) {
      super(props);

      this._mapRef = React.createRef();
    }

    render() {
      return <>
        <section className="cities__map map">
          <div ref={this._mapRef} style={{height: `100%`}}>
            <Component mapRef={this._mapRef}/>
          </div>
        </section>
      </>;
    }
  };
};

export default withMap;
