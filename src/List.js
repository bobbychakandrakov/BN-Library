import Component from './Component';

export default class List extends Component {
  constructor(element) {
    super(element);
    this.render('List 123');
    this.build();
  }

  build() {
    var template = '<ul>';
    var data = eval(this.element.getAttribute('data'));
    data.forEach((element) => {
      template += '<li>' + element + '</li>';
    });
    template += '</ul>';
    this.render(template);
  }
}
