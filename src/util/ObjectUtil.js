export default class ObjectUtil {
  static hasProperty(obj, propertyList) {
    const properties = propertyList.split('.');
    let temp = obj;

    for (var i = 0; i < properties.length; i++) {
      if (temp[properties[i]]) {
        temp = temp[properties[i]];
      } else {
        return false;
      }
    }

    return true;
  }
}
