import {Offer, City} from '../../types/interfaces';

interface Props {
  offers: Offer[]
  activeCity?: City
}

interface State {
  activeItem: number
}

const withActiveItem = (Component) => {
  return class WithActiveItem extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: -1
      };

      this._itemClickHandler = this._itemClickHandler.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<any>) {
      if (prevProps.activeCity !== this.props.activeCity) {
        this._resetActiveItem();
      }
    }

    _itemClickHandler(index: number) {
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
};

export default withActiveItem;
