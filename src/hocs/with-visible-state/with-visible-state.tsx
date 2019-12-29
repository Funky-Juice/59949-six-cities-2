import {Offer, City} from '../../types/interfaces'

interface Props {
  offer?: Offer
  btnClass?: string
  activeCity?: City
  activeOffers?: Offer[]
}

interface State {
  isVisible: boolean
}

const withVisibleState = (Component) => {
  return class WithVisibleState extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this.state = {
        isVisible: false
      };

      this._visibleResetHandler = this._visibleResetHandler.bind(this);
      this._visibleChangeHandler = this._visibleChangeHandler.bind(this);
    }

    _visibleChangeHandler(bool: boolean) {
      this.setState({isVisible: bool});
    }

    _visibleResetHandler() {
      this.setState({isVisible: false});
    }

    render() {
      const {isVisible} = this.state;

      return <Component
        {...this.props}
        onVisibleReset={this._visibleResetHandler}
        onVisibleChange={this._visibleChangeHandler}
        isVisible={isVisible}
      />;
    }
  }
};

export default withVisibleState;
