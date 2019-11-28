
const withVisibleState = (Component) => {
  class WithVisibleState extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isVisible: false
      };

      this._visibleChangeHandler = this._visibleChangeHandler.bind(this);
    }

    _visibleChangeHandler(bool) {
      this.setState({isVisible: bool});
    }

    render() {
      return <Component
        {...this.props}
        onVisibleChange={this._visibleChangeHandler}
        isVisible={this.state.isVisible}
      />;
    }
  }

  return WithVisibleState;
};

export default withVisibleState;
