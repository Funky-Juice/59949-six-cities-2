import {RefObject} from 'react';

interface Props {
  mapClass: string
}

const withMap = (Component) => {
  return class WithMap extends React.PureComponent<Props> {
    private readonly _mapRef: RefObject<HTMLDivElement>;

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
};

export default withMap;
