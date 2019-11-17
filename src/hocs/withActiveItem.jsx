const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeitem: -1,
      };
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
