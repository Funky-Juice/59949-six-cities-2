
const withVisibleState = (Component) => {
  class WithVisibleState extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isVisible: false
      };

      this._visibleResetHandler = this._visibleResetHandler.bind(this);
      this._visibleChangeHandler = this._visibleChangeHandler.bind(this);
    }

    _visibleChangeHandler(bool) {
      this.setState({isVisible: bool});
    }

    _visibleResetHandler() {
      this.setState({isVisible: false});
    }

    render() {
      return <Component
        {...this.props}
        onVisibleReset={this._visibleResetHandler}
        onVisibleChange={this._visibleChangeHandler}
        isVisible={this.state.isVisible}
      />;
    }
  }

  return WithVisibleState;
};

export default withVisibleState;
