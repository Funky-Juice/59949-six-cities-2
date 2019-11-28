import {activeCityPropTypes} from '../../prop-types/prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: -1
      };

      this._itemClickHandler = this._itemClickHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.activeCity !== this.props.activeCity) {
        this._resetActiveItem();
      }
    }

    _itemClickHandler(index) {
      this.setState({activeItem: index});
    }

    _resetActiveItem() {
      this.setState({activeItem: -1});
    }

    render() {
      return <Component
        {...this.props}
        onItemClick={this._itemClickHandler}
        activeItem={this.state.activeItem}
      />;
    }
  }

  WithActiveItem.propTypes = {
    activeCity: activeCityPropTypes
  };

  return WithActiveItem;
};

export default withActiveItem;
