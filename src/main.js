import List from './List';
import Table from './Table';

const classes = {
    List,
    Table
};

class DynamicClass {
    constructor (className, opts) {
        return new classes[className](opts);
    }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener('DOMContentLoaded', function(event) {
  let arr = Array.from(document.body.children);
  arr.forEach((element) => {
    if (element.tagName.startsWith('BN')) {
      let e = element.tagName.toLowerCase().replace('bn-', '');
      new DynamicClass(capitalize(e), element);
    }
  });
});
