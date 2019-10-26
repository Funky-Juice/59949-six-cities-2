import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

window.React = require(`react`);

Enzyme.configure({adapter: new Adapter()});
