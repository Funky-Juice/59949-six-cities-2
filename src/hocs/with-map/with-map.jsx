const withMap = (Component) => {
  class WithMap extends React.PureComponent {
    constructor(props) {
      super(props);

      this._mapRef = React.createRef();
    }

    render() {
      const {mapClass} = this.props;

      return <>
        <section className={`${mapClass}__map map`}>
          <div ref={this._mapRef} style={{height: `100%`}}>
            <Component mapRef={this._mapRef}/>
          </div>
        </section>
      </>;
    }
  }

  WithMap.propTypes = {
    mapClass: PropTypes.string.isRequired
  };

  return WithMap;
};

export default withMap;
