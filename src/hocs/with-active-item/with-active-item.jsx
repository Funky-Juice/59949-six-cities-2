const withActiveItem = (Component) => {
  return class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: -1
      };

      this._itemClickHandler = this._itemClickHandler.bind(this);
    }

    _itemClickHandler(index) {
      this.setState({activeItem: index});
    }

    render() {
      return <Component
        {...this.props}
        onItemClick={this._itemClickHandler}
        activeItem={this.state.activeItem}
      />;
    }
  };
};

export default withActiveItem;
