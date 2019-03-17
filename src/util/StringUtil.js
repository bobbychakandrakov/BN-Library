export default class StringUtil {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
