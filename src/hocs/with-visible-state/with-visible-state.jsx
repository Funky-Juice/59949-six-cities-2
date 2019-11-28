import {activeCityPropTypes} from '../../prop-types/prop-types';

const withVisibleState = (Component) => {
  class WithVisibleState extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isVisible: false
      };

      this._visibleChangeHandler = this._visibleChangeHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.activeCity !== this.props.activeCity) {
        this._resetActiveItem();
      }
    }

    _visibleChangeHandler(bool) {
      this.setState({isVisible: bool});
    }

    _resetActiveItem() {
      this.setState({isVisible: false});
    }

    render() {
      return <Component
        {...this.props}
        onVisibleChange={this._visibleChangeHandler}
        isVisible={this.state.isVisible}
      />;
    }
  }

  WithVisibleState.propTypes = {
    activeCity: activeCityPropTypes
  };

  return WithVisibleState;
};

export default withVisibleState;
