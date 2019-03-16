import List from './List';
import Table from './Table';
import StringUtil from './StringUtil';

const classes = {
    List,
    Table
};

class DynamicClass {
    constructor (className, opts) {
        return new classes[className](opts);
    }
}

document.addEventListener('DOMContentLoaded', function(event) {
  let arr = Array.from(document.body.children);
  arr.forEach((element) => {
    if (element.tagName.startsWith('BN')) {
      let e = element.tagName.toLowerCase().replace('bn-', '');
      new DynamicClass(StringUtil.capitalize(e), element);
      debugger
    }
  });
});
