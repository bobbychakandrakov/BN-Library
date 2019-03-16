import Component from './Component';

export default class List extends Component {
  constructor(element) {
    super(element);
    this.build();
  }

  build() {
    let template = '<ul>';
    let data = eval(this.element.getAttribute('data'));

    data.forEach(element => {
      template += '<li>' + element + '</li>';
    });

    template += '</ul>';

    this.render(template);
  }
}
