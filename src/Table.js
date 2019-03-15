import Component from './Component';

export default class Table extends Component {
  constructor(element) {
    element.innerHTML = 'Table';
    super(element);
  }
}
