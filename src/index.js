module.exports = function check(str, variants) {
    let result = [];
    for (let x = 0; x < str.length; x++) {
      for (let y = 0; y < variants.length; y++) {
        if (variants[y][0] == str[x]) {
          if (result.length != 0 && result[result.length - 1] == variants[y][0] && variants[y][1] == str[x]) {
            result = result.slice(0, result.length - 1);
          } else {
            result += str[x];
          }
        } else if (variants[y][1] == str[x]) {
          if (result[result.length - 1] != variants[y][0]) {
            return false;
          } else if (result[result.length - 1] == variants[y][0]) {
            result = result.slice(0, result.length - 1);
          }
        }
      }
    }
    if (result.length != 0) {
      return false;
    } else {
      return true;
    }
}
