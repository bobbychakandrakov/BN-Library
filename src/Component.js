export default class Component {
  constructor(element) {
    this.element = element;
  }

  render(template) {
    this.element.innerHTML = template;
  }
}
